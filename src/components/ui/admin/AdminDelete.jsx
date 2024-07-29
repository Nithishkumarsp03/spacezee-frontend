import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Form, Row, Col } from "react-bootstrap";
import Swal from "sweetalert2";

import { z } from "zod";
import { toast } from "sonner";
import { useDelateUserMutation } from "../../../redux/features/admin/adminUserManagementApi";

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

  const [delateUser] = useDelateUserMutation();

  const onSubmit = async (data) => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "This action cannot be undone!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    });

    if (result.isConfirmed) {
      const toastId = toast.loading("Deleting user");
      try {
        const userInfo = {
          email: data.email,
          isDeleted: data.isDeleted,
        };
        await delateUser(userInfo).unwrap();
        toast.success("User Deleted", { id: toastId, duration: 2000 });
      } catch (err) {
        console.log(err);
        toast.error(err?.data?.message, { id: toastId, duration: 2000 });
      }
    }
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
