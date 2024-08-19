import { useNavigate, useLocation } from "react-router-dom";

function useNavigateToDirectory() {
  const navigate = useNavigate();
  const location = useLocation();
  const navigateToDirectory = (directory) => {
    if (directory === -1) {
      navigate(-1);
    } else {
      const currentPath = location.pathname;
      const basePath = currentPath.substring(0, currentPath.lastIndexOf("/"));
      navigate(`${basePath}/${directory}`);
    }
  };

  return navigateToDirectory;
}

export default useNavigateToDirectory;
