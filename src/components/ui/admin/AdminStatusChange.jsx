import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Form, Row, Col } from "react-bootstrap";
import { z } from "zod";
import { toast } from "sonner";
import { useChangeUserStatusMutation } from "../../../redux/features/admin/adminUserManagementApi";

// Define the schema with email and status fields
const userStatusSchema = z.object({
  email: z
    .string({ required_error: "email required" })
    .email("Invalid email address"),
  status: z.enum(["in-progress", "blocked"]),
});
const AdminStatusChange = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(userStatusSchema),
  });

  const [changeUserStatus] = useChangeUserStatusMutation();

  const onSubmit = async (data) => {
    const toastId = toast.loading("Changing status");
    try {
      const userInfo = {
        email: data.email,
        status: data.status,
      };
      await changeUserStatus(userInfo).unwrap();

      toast.success("User status changed", { id: toastId, duration: 2000 });
    } catch (err) {
      toast.error(err?.data?.message, { id: toastId, duration: 2000 });
    }
  };

  return (
    <div className="container mt-4">
      <h2>Change User Status</h2>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              {...register("email")}
              isInvalid={!!errors.email}
              placeholder="Enter email"
            />
            <Form.Control.Feedback type="invalid">
              {errors.email?.message}
            </Form.Control.Feedback>
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridStatus">
            <Form.Label>Status</Form.Label>
            <Form.Control
              as="select"
              {...register("status")}
              isInvalid={!!errors.status}
            >
              <option value="">Select status</option>
              <option value="in-progress">In Progress</option>
              <option value="blocked">Blocked</option>
            </Form.Control>
            <Form.Control.Feedback type="invalid">
              {errors.status?.message}
            </Form.Control.Feedback>
          </Form.Group>
        </Row>
        <Button variant="primary" type="submit">
          Change Status
        </Button>
      </Form>
    </div>
  );
};

export default AdminStatusChange;
