import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Form, Row, Col } from "react-bootstrap";
import Swal from "sweetalert2";

import { z } from "zod";

const userDeleteSchema = z.object({
  email: z
    .string()
    .email("Invalid email address")
    .nonempty("Email is required"),
  isDeleted: z.boolean({ invalid_type_error: "Delete must be boolean" }),
});

const AdminDelete = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(userDeleteSchema),
  });

  const onSubmit = (data) => {
    Swal.fire({
      title: "Are you sure?",
      text: "This action cannot be undone!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        // Add logic to delete user
        console.log("User Deleted:", data);
        Swal.fire("Deleted!", "The user has been deleted.", "success");
      }
    });
  };

  return (
    <div className="container mt-4">
      <h2>Delete User</h2>
      <Form onSubmit={handleSubmit(onSubmit)}>
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
          <Form.Group as={Col} controlId="formGridIsDeleted">
            <Form.Label>Delete</Form.Label>
            <Form.Check
              type="checkbox"
              {...register("isDeleted")}
              isInvalid={!!errors.isDeleted}
              label="Check to delete user"
            />
            <Form.Control.Feedback type="invalid">
              {errors.isDeleted?.message}
            </Form.Control.Feedback>
          </Form.Group>
        </Row>
        <Button variant="danger" type="submit">
          Delete User
        </Button>
      </Form>
    </div>
  );
};

export default AdminDelete;
