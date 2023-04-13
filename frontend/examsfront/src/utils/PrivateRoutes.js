import { Navigate, Outlet } from "react-router-dom";

const x = function () {
  return false;
};
const PrivateRoutes = () => {
  let auth = { token: x };
  return auth.token ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoutes;
