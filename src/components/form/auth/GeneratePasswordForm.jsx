import { Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { BiArrowBack } from "react-icons/bi";
import { Link } from "react-router-dom";
import { toast } from "sonner";
import { useGeneratePasswordMutation } from "../../../redux/features/auth/authApi";

function GeneratePasswordForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [generatePassword] = useGeneratePasswordMutation();

  const onSubmit = async (data) => {
    const toastId = toast.loading("Generating password");

    try {
      const userInfo = {
        email: data.email,
        id: data.id,
      };
      const res = await generatePassword(userInfo).unwrap();

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
      <h2 className="text-center">Create Password</h2>
      <p className="text-center">
        Fill in the below items and submit to create a <br />
        password for your account.
      </p>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group controlId="formId" className="mb-3">
          <Form.Control
            type="text"
            {...register("id", { required: true })}
            isInvalid={errors.id}
            placeholder="Register Id"
          />
          <Form.Control.Feedback type="invalid">
            Register Id is required
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group controlId="formEmail" className="mb-3">
          <Form.Control
            type="email"
            {...register("email", { required: true })}
            isInvalid={errors.email}
            placeholder="Email Address"
          />
          <Form.Control.Feedback type="invalid">
            Email is required
          </Form.Control.Feedback>
        </Form.Group>

        <Button variant="primary" type="submit" className="w-100">
          Submit
        </Button>
      </Form>
    </>
  );
}

export default GeneratePasswordForm;
