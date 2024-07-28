import { Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { BiArrowBack } from "react-icons/bi";
import { Link } from "react-router-dom";
import { toast } from "sonner";
import useQuery from "../../../hooks/useQuery";
import { useResetPasswordMutation } from "../../../redux/features/auth/authApi";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { useState } from "react";

function ResetPasswordForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [resetPassword] = useResetPasswordMutation();

  const query = useQuery();
  const token = query.get("token");
  console.log(token);
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const onSubmit = async (data) => {
    const toastId = toast.loading("Resetting password");

    try {
      const userInfo = {
        email: data.email,
        newPassword: data.password,
        token,
      };
      const res = await resetPassword(userInfo).unwrap();

      toast.success(res.message, { id: toastId, duration: 2000 });
    } catch (err) {
      console.log(err);
      toast.error(err?.data?.message, { id: toastId, duration: 2000 });
    }
  };
  return (
    <>
      <div className=" auth-back-btn mb-5">
        <Link to="/" className="text-decoration-none back-btn">
          <BiArrowBack className="me-2"></BiArrowBack>
          <span>Back</span>
        </Link>
      </div>
      <h2 className="text-center">Reset Your Password</h2>
      <p className="text-center">
        Enter Your Email and New password to
        <br />
        reset password.
      </p>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group controlId="formEmail" className="mb-3">
          <Form.Label>Email Address</Form.Label>
          <Form.Control
            type="email"
            {...register("email", { required: true })}
            isInvalid={errors.email}
          />
          <Form.Control.Feedback type="invalid">
            Email is required
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group controlId="formPassword" className="mb-3 position-relative">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type={passwordVisible ? "text" : "password"}
            className="form-control-password"
            {...register("password", { required: true })}
            isInvalid={errors.password}
          />
          <span
            className="password-toggle-icon"
            onClick={togglePasswordVisibility}
          >
            {passwordVisible ? <AiFillEyeInvisible /> : <AiFillEye />}
          </span>
          <Form.Control.Feedback type="invalid">
            Password is required
          </Form.Control.Feedback>
        </Form.Group>
        <Button variant="primary" type="submit" className="w-100">
          Submit
        </Button>
      </Form>
    </>
  );
}

export default ResetPasswordForm;
