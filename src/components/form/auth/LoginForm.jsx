import React from "react";
import { useDispatch } from "react-redux";
import { useLoginMutation } from "../../../redux/features/auth/authApi";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { verifyToken } from "../../../utils/verifyToken";
import { userRole } from "../../../utils/constants";
import { setUser } from "../../../redux/features/auth/authSlice";
import { toast } from "sonner";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { Button, Form } from "react-bootstrap";
import { config } from "../../../utils/config";

function LoginForm() {
  const dispatch = useDispatch();
  const [login] = useLoginMutation();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const onSubmit = async (data) => {
    console.log("url log", config.VITE_URL_BACKEND);
    const toastId = toast.loading("Logging in");

    try {
      const userInfo = {
        email: data.email,
        password: data.password,
      };
      const res = await login(userInfo).unwrap();

      const user = verifyToken(res.data.accessToken);
      dispatch(setUser({ user: user, token: res.data.accessToken }));
      toast.success("Logged in", { id: toastId, duration: 2000 });
      if (user.role === userRole.user) {
        navigate(`/home`);
      }
      if (user.role === userRole.admin || user.role === userRole.superAdmin) {
        navigate(`/admin`);
      }
    } catch (err) {
      // console.log(err);
      toast.error(err?.data?.message, { id: toastId, duration: 2000 });
    }
  };

  return (
    <>
      <h2 className="text-center">Login</h2>
      <p className="text-center">Please login to your account</p>
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
        <Form.Group controlId="formRemember" className="mb-3">
          <Form.Check
            type="checkbox"
            label="Remember Me"
            {...register("remember")}
          />
        </Form.Group>
        <div className="d-flex justify-content-between mb-3 flex-lg-row flex-column">
          <Link to="/forgotPassword" className="text-decoration-none">
            Forgot Password?
          </Link>
          <Link to="/generatePassword" className="text-decoration-none">
            Don’t have a password? Generate Now
          </Link>
        </div>
        <Button variant="primary" type="submit" className="w-100">
          Login
        </Button>
      </Form>
    </>
  );
}

export default LoginForm;
