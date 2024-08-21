import { useNavigate, useLocation } from "react-router-dom";

function useNavigateToDirectory() {
  const navigate = useNavigate();
  const location = useLocation();

  const navigateToDirectory = (directory) => {
    if (directory === -1) {
      navigate(-1);
    } else {
      const basePath = location.pathname.substring(
        0,
        location.pathname.lastIndexOf("/")
      );

      // If the directory is a full path, navigate directly
      if (directory.startsWith("/")) {
        navigate(directory);
      } else {
        // Otherwise, navigate to the constructed path
        navigate(`${basePath}/${directory}`);
      }
    }
  };

  return navigateToDirectory;
}

export default useNavigateToDirectory;
