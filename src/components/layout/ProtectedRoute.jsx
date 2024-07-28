import { useDispatch, useSelector } from "react-redux";
import { logout, useCurrentToken } from "../../redux/features/auth/authSlice";
import { verifyToken } from "../../utils/verifyToken";
import { Navigate } from "react-router-dom";
import PropTypes from "prop-types";

const ProtectedRoute = ({ children, role }) => {
  const token = useSelector(useCurrentToken);

  let user;

  if (token) {
    user = verifyToken(token);
  }

  const dispatch = useDispatch();

  if (role.length > 0 && !role.includes(user?.role)) {
    dispatch(logout());
    return <Navigate to="/" replace={true} />;
  }
  if (!token) {
    return <Navigate to="/" replace={true} />;
  }

  return children;
};

export default ProtectedRoute;

ProtectedRoute.propTypes = {
  children: PropTypes.node,
  role: PropTypes.string,
};
