import UserLayout from "../components/layout/UserLayout";
import UserCertificate from "../components/ui/user/UserCertificate";
import UserProfileView from "../components/ui/user/UserProfileView";
import UserProgramCard from "../components/ui/user/UserProgramCard";

export const userRoutes = {
  path: "home",
  element: <UserLayout />,
  children: [
    {
      index: true,
      element: <UserProgramCard />,
    },
    {
      path: "profile",
      element: <UserProfileView />,
    },
    {
      path: "certificate",
      element: <UserCertificate />,
    },
  ],
};
