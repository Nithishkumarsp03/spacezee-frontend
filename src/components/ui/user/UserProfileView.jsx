import { useState } from "react";
import {
  Container,
  Row,
  Col,
  Breadcrumb,
  Form,
  Button,
  Card,
  Modal,
  InputGroup,
} from "react-bootstrap";
import { useForm, Controller } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import {
  logout,
  selectCurrentUser,
  setUser,
} from "../../../redux/features/auth/authSlice";
import { toast } from "sonner";
import { useChangePasswordMutation } from "../../../redux/features/auth/authApi";
import { verifyToken } from "../../../utils/verifyToken";

const UserProfileView = () => {
  const {
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const [showModal, setShowModal] = useState(false);
  const [showPassword, setShowPassword] = useState({
    old: false,
    new: false,
    confirm: false,
  });
  const [changePassword] = useChangePasswordMutation();
  const dispatch = useDispatch();
  const user = useSelector(selectCurrentUser);
  const getInitials = () => {
    return user.name ? user.name.charAt(0).toUpperCase() : "";
  };

  const handleLogout = () => {
    dispatch(logout());
  };

  const handlePasswordChange = async (data) => {
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
    setShowModal(false);
  };

  const togglePasswordVisibility = (field) => {
    setShowPassword((prev) => ({ ...prev, [field]: !prev[field] }));
  };

  return (
    <section className="pt-4 mb-5">
      <Container>
        <Row>
          <Col xs={12} className="mb-4">
            <Breadcrumb>
              <Breadcrumb.Item href="/home">Home</Breadcrumb.Item>
              <Breadcrumb.Item active>My Profile</Breadcrumb.Item>
            </Breadcrumb>
          </Col>
          <Col xs={12} className="mb-4">
            <h4 className="text-dark">My Profile</h4>
          </Col>
          <Col xs={12}>
            <Card className="p-4 shadow-sm">
              <Card.Body>
                <div className="text-center mb-4">
                  <div
                    className="profile-user-avatar border rounded-circle d-flex justify-content-center align-items-center mx-auto mb-3 overflow-hidden bg-light"
                    style={{ width: "100px", height: "100px" }}
                  >
                    <span className="display-4 text-primary">{`${getInitials()}`}</span>
                  </div>
                </div>
                <Form>
                  <Form.Group as={Row} className="mb-3">
                    <Form.Label column sm={4}>
                      Full Name:
                    </Form.Label>
                    <Col sm={8}>
                      <Form.Control
                        type="text"
                        readOnly
                        defaultValue={user.name}
                        className="bg-light"
                      />
                    </Col>
                  </Form.Group>
                  <Form.Group as={Row} className="mb-3">
                    <Form.Label column sm={4}>
                      Email Address:
                    </Form.Label>
                    <Col sm={8}>
                      <Form.Control
                        type="email"
                        readOnly
                        defaultValue={user.email}
                        className="bg-light"
                      />
                    </Col>
                  </Form.Group>
                  <Form.Group as={Row} className="mb-3">
                    <Col xs={6}>
                      <strong>Change Your Password</strong>
                    </Col>
                    <Col xs={6} className="text-end">
                      <Button
                        variant="info"
                        size="sm"
                        onClick={() => setShowModal(true)}
                        className="w-100 w-sm-auto"
                      >
                        Change
                      </Button>
                    </Col>
                  </Form.Group>
                  <div className="text-center mt-3">
                    <Button
                      variant="danger"
                      size="sm"
                      onClick={handleLogout}
                      className="w-100 w-sm-auto"
                    >
                      Logout
                    </Button>
                  </div>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      {/* Password Change Modal */}
      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Change Password</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit(handlePasswordChange)}>
            <Form.Group className="mb-3">
              <Form.Label>Old Password</Form.Label>
              <InputGroup>
                <Controller
                  name="oldPassword"
                  control={control}
                  defaultValue=""
                  rules={{ required: "Old password is required" }}
                  render={({ field }) => (
                    <Form.Control
                      {...field}
                      type={showPassword.old ? "text" : "password"}
                      isInvalid={!!errors.oldPassword}
                    />
                  )}
                />
                <InputGroup.Text
                  onClick={() => togglePasswordVisibility("old")}
                >
                  {showPassword.old ? <FaEyeSlash /> : <FaEye />}
                </InputGroup.Text>
                <Form.Control.Feedback type="invalid">
                  {errors.oldPassword?.message}
                </Form.Control.Feedback>
              </InputGroup>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>New Password</Form.Label>
              <InputGroup>
                <Controller
                  name="newPassword"
                  control={control}
                  defaultValue=""
                  rules={{ required: "New password is required" }}
                  render={({ field }) => (
                    <Form.Control
                      {...field}
                      type={showPassword.new ? "text" : "password"}
                      isInvalid={!!errors.newPassword}
                    />
                  )}
                />
                <InputGroup.Text
                  onClick={() => togglePasswordVisibility("new")}
                >
                  {showPassword.new ? <FaEyeSlash /> : <FaEye />}
                </InputGroup.Text>
                <Form.Control.Feedback type="invalid">
                  {errors.newPassword?.message}
                </Form.Control.Feedback>
              </InputGroup>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Confirm New Password</Form.Label>
              <InputGroup>
                <Controller
                  name="confirmNewPassword"
                  control={control}
                  defaultValue=""
                  rules={{
                    required: "Please confirm your new password",
                    validate: (value) =>
                      value === watch("newPassword") ||
                      "Passwords do not match",
                  }}
                  render={({ field }) => (
                    <Form.Control
                      {...field}
                      type={showPassword.confirm ? "text" : "password"}
                      isInvalid={!!errors.confirmNewPassword}
                    />
                  )}
                />
                <InputGroup.Text
                  onClick={() => togglePasswordVisibility("confirm")}
                >
                  {showPassword.confirm ? <FaEyeSlash /> : <FaEye />}
                </InputGroup.Text>
                <Form.Control.Feedback type="invalid">
                  {errors.confirmNewPassword?.message}
                </Form.Control.Feedback>
              </InputGroup>
            </Form.Group>
            <Button type="submit" variant="success" className="w-100">
              Save
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </section>
  );
};

export default UserProfileView;
