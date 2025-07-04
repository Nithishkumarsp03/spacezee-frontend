import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Form, Row, Col, InputGroup } from "react-bootstrap";
import { z } from "zod";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { toast } from "sonner";
import { useChangePasswordMutation } from "../../../redux/features/auth/authApi";
import { verifyToken } from "../../../utils/verifyToken";
import { useDispatch } from "react-redux";
import { setUser } from "../../../redux/features/auth/authSlice";

const passwordChangeSchema = z
  .object({
    oldPassword: z.string().nonempty({ message: "Old Password is required" }),
    newPassword: z
      .string()
      .nonempty({ message: "New Password is required" })
      .max(20, { message: "Password can not be more than 20 characters" }),
    confirmPassword: z
      .string()
      .nonempty({ message: "Confirm Password is required" }),
  })
  .refine((data) => data.newPassword === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });

const AdminPasswordChange = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(passwordChangeSchema),
  });
  const [changePassword] = useChangePasswordMutation();
  const [showOldPassword, setShowOldPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const dispatch = useDispatch();

  const togglePasswordVisibility = (field) => {
    if (field === "old") {
      setShowOldPassword(!showOldPassword);
    } else if (field === "new") {
      setShowNewPassword(!showNewPassword);
    } else if (field === "confirm") {
      setShowConfirmPassword(!showConfirmPassword);
    }
  };

  const onSubmit = async (data) => {
    const toastId = toast.loading("Changing password");
    try {
      const userInfo = {
        oldPassword: data.oldPassword,
        newPassword: data.newPassword,
      };
      const res = await changePassword(userInfo).unwrap();

      const user = verifyToken(res.data.accessToken);
      dispatch(setUser({ user: user, token: res.data.accessToken }));
      toast.success("Password changed", { id: toastId, duration: 2000 });
    } catch (err) {
      toast.error(err?.data?.message, { id: toastId, duration: 2000 });
    }
  };

  return (
    <div className="container mt-4">
      <h2>Change Password</h2>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridOldPassword">
            <Form.Label>Old Password</Form.Label>
            <InputGroup>
              <Form.Control
                type={showOldPassword ? "text" : "password"}
                placeholder="Enter old password"
                {...register("oldPassword")}
                isInvalid={!!errors.oldPassword}
              />
              <Button
                variant="outline-secondary"
                onClick={() => togglePasswordVisibility("old")}
              >
                {showOldPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
              </Button>
              <Form.Control.Feedback type="invalid">
                {errors.oldPassword?.message}
              </Form.Control.Feedback>
            </InputGroup>
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridNewPassword">
            <Form.Label>New Password</Form.Label>
            <InputGroup>
              <Form.Control
                type={showNewPassword ? "text" : "password"}
                placeholder="Enter new password"
                {...register("newPassword")}
                isInvalid={!!errors.newPassword}
              />
              <Button
                variant="outline-secondary"
                onClick={() => togglePasswordVisibility("new")}
              >
                {showNewPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
              </Button>
              <Form.Control.Feedback type="invalid">
                {errors.newPassword?.message}
              </Form.Control.Feedback>
            </InputGroup>
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridConfirmPassword">
            <Form.Label>Confirm Password</Form.Label>
            <InputGroup>
              <Form.Control
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Confirm new password"
                {...register("confirmPassword")}
                isInvalid={!!errors.confirmPassword}
              />
              <Button
                variant="outline-secondary"
                onClick={() => togglePasswordVisibility("confirm")}
              >
                {showConfirmPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
              </Button>
              <Form.Control.Feedback type="invalid">
                {errors.confirmPassword?.message}
              </Form.Control.Feedback>
            </InputGroup>
          </Form.Group>
        </Row>

        <Button variant="primary" type="submit">
          Change Password
        </Button>
      </Form>
    </div>
  );
};

export default AdminPasswordChange;
