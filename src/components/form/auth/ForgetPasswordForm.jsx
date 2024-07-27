import { Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { BiArrowBack } from "react-icons/bi";
import { Link } from "react-router-dom";
import { toast } from "sonner";
import { useForgetPasswordMutation } from "../../../redux/features/auth/authApi";

function ForgetPasswordForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [forgetPassword] = useForgetPasswordMutation();

  const onSubmit = async (data) => {
    const toastId = toast.loading("Generating reset link");

    try {
      const userInfo = {
        email: data.email,
      };
      const res = await forgetPassword(userInfo).unwrap();

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
      <h2 className="text-center">Forgot Your Password?</h2>
      <p className="text-center">
        Enter Your Email and We will send you a link to
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

        <Button variant="primary" type="submit" className="w-100">
          Send
        </Button>
      </Form>
    </>
  );
}

export default ForgetPasswordForm;
