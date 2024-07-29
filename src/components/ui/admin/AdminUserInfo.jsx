import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  Card,
  Alert,
} from "react-bootstrap";

import { toast } from "sonner";
import { useLazyGetUserinfoQuery } from "../../../redux/features/admin/adminUserManagementApi";

const AdminUserInfo = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [triggerGetUserinfo, { data: userInfo, error, isLoading, reset }] =
    useLazyGetUserinfoQuery();

  const onSubmit = async (data) => {
    const toastId = toast.loading("Getting user");
    try {
      await triggerGetUserinfo({ email: data.email });
      toast.success("User retrieve successful", {
        id: toastId,
        duration: 2000,
      });
    } catch (err) {
      toast.error(err?.data?.message || "Failed to get user information", {
        id: toastId,
        duration: 2000,
      });
    }
  };
  useEffect(() => {
    if (error) {
      reset(); // Reset the query state
    }
  }, [error, reset]);
  return (
    <Container className="mt-5">
      <Row className="justify-content-md-center">
        <Col md={6}>
          <Card>
            <Card.Body>
              <Form onSubmit={handleSubmit(onSubmit)}>
                <Form.Group controlId="email">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter email"
                    {...register("email", { required: true })}
                  />
                  {errors.email && (
                    <Alert variant="danger">This field is required</Alert>
                  )}
                </Form.Group>
                <Button
                  variant="primary"
                  type="submit"
                  disabled={isLoading}
                  className="mt-3"
                >
                  {isLoading ? "Loading..." : "Get User Info"}
                </Button>
              </Form>

              {error && (
                <Alert variant="danger" className="mt-3">
                  {error?.data?.message || "Failed to get user information"}
                </Alert>
              )}
              {userInfo && (
                <Card className="mt-3">
                  <Card.Header>User Information</Card.Header>
                  <Card.Body>
                    <p>
                      <strong>ID:</strong> {userInfo.data.id}
                    </p>
                    <p>
                      <strong>Email:</strong> {userInfo.data.email}
                    </p>
                    <p>
                      <strong>Name:</strong> {userInfo.data.name}
                    </p>
                    <p>
                      <strong>Role:</strong> {userInfo.data.role}
                    </p>
                    <p>
                      <strong>Status:</strong> {userInfo.data.status}
                    </p>
                    <p>
                      <strong>Is Deleted:</strong>{" "}
                      {userInfo.isDeleted ? "Yes" : "No"}
                    </p>
                  </Card.Body>
                </Card>
              )}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default AdminUserInfo;
