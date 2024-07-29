import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Form, Row, Col, Card } from "react-bootstrap";
import { z } from "zod";
import { toast } from "sonner";
import { useCreateUserMutation } from "../../../redux/features/admin/adminUserManagementApi";

const userValidationSchema = z.object({
  name: z.string().nonempty({ message: "Name is required" }),
  email: z
    .string()
    .nonempty({ message: "Email is required" })
    .email({ message: "Invalid email" }),
  role: z.enum(["admin", "user"], {
    invalid_type_error: "Role must be either 'admin' or 'user'",
  }),
});

const AdminCreateUser = () => {
  const [createdUser, setCreatedUser] = useState(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(userValidationSchema),
  });

  const [createUser] = useCreateUserMutation();

  const onSubmit = async (data) => {
    const toastId = toast.loading("Creating user");
    try {
      const userInfo = {
        name: data.name,
        email: data.email,
        role: data.role,
      };
      const res = await createUser(userInfo).unwrap();
      setCreatedUser(res.data);
      toast.success("User creation successful", {
        id: toastId,
        duration: 2000,
      });
    } catch (err) {
      toast.error(err?.data?.message, { id: toastId, duration: 2000 });
    }
  };

  return (
    <div className="container mt-4">
      <h2>Create User</h2>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter name"
              {...register("name")}
              isInvalid={!!errors.name}
            />
            <Form.Control.Feedback type="invalid">
              {errors.name?.message}
            </Form.Control.Feedback>
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              {...register("email")}
              isInvalid={!!errors.email}
            />
            <Form.Control.Feedback type="invalid">
              {errors.email?.message}
            </Form.Control.Feedback>
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridRole">
            <Form.Label>Role</Form.Label>
            <Form.Control
              as="select"
              {...register("role")}
              isInvalid={!!errors.role}
            >
              <option value="">Select role</option>
              <option value="admin">Admin</option>
              <option value="user">User</option>
            </Form.Control>
            <Form.Control.Feedback type="invalid">
              {errors.role?.message}
            </Form.Control.Feedback>
          </Form.Group>
        </Row>

        <Button variant="primary" type="submit">
          Create User
        </Button>
      </Form>

      {createdUser && (
        <Card className="mt-4">
          <Card.Body>
            <Card.Title>Created User Details</Card.Title>
            <Card.Text>
              <strong>ID:</strong> {createdUser.id}
            </Card.Text>
            <Card.Text>
              <strong>Name:</strong> {createdUser.name}
            </Card.Text>
            <Card.Text>
              <strong>Status:</strong> {createdUser.status}
            </Card.Text>
            <Card.Text>
              <strong>Email:</strong> {createdUser.email}
            </Card.Text>
            <Card.Text>
              <strong>Role:</strong> {createdUser.role}
            </Card.Text>
          </Card.Body>
        </Card>
      )}
    </div>
  );
};

export default AdminCreateUser;
