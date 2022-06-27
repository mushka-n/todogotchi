import { observer } from "mobx-react-lite";
import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { Context } from "../..";
import { LOGIN_ROUTE } from "../../utils/consts";

const PrivateRoute = () => {
  // return <Outlet />;

  const { user } = useContext(Context);
  const token = localStorage.getItem("token");
  if (token && !user.isAuth) return null;

  return user.isAuth ? <Outlet /> : <Navigate to={LOGIN_ROUTE} />;
};

export default observer(PrivateRoute);
