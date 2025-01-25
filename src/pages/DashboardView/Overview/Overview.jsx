import AdminOverview from "@/components/DashboardView/AdminOverview";
import UserOverview from "@/components/RootView/DashboardView/UserOverview";
import useRole from "@/hooks/useRole";

const Overview = () => {
  const [userRole] = useRole();
  return (
    <div>{userRole === "admin" ? <AdminOverview /> : <UserOverview />}</div>
  );
};

export default Overview;
