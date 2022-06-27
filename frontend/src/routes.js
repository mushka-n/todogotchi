import Auth from "./pages/Auth";
import Home from "./pages/Home";
import Edit from "./pages/Edit";

import {
  LOGIN_ROUTE,
  EDIT_ROUTE,
  REGISTRATION_ROUTE,
  HOME_ROUTE,
} from "./utils/consts";

export const authRoutes = [
  {
    path: HOME_ROUTE,
    Component: Home,
  },
  {
    path: EDIT_ROUTE,
    Component: Edit,
  },
];

export const publicRoutes = [
  {
    path: LOGIN_ROUTE,
    Component: Auth,
  },
  {
    path: REGISTRATION_ROUTE,
    Component: Auth,
  },
];
