import { Routes, Route, Navigate } from "react-router-dom";
import { authRoutes, publicRoutes } from "../../routes";
import { HOME_ROUTE } from "../../utils/consts";
import PrivateRoute from "./PrivateRoute";

const AppRouter = () => {
  return (
    <Routes>
      {authRoutes.map(({ path, Component }) => (
        <Route key={path} path={path} element={<PrivateRoute />}>
          <Route key={path} path={path} element={<Component />} />
        </Route>
      ))}

      {publicRoutes.map(({ path, Component }) => (
        <Route key={path} path={path} element={<Component />} />
      ))}

      <Route path="*" element={<Navigate to={HOME_ROUTE} />} />
    </Routes>
  );
};

export default AppRouter;
