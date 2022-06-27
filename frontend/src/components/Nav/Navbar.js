import { Navbar, Button } from "flowbite-react";

import React, { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Context } from "../..";
import { EDIT_ROUTE, HOME_ROUTE } from "../../utils/consts";

const Nav = () => {
  const { user } = useContext(Context);
  const navigate = useNavigate();

  const location = useLocation();
  const isHome = location.pathname === HOME_ROUTE;

  const logOut = async () => {
    user.setUser({});
    user.setIsAuth(false);
    localStorage.removeItem("token");
    //await UserAPI.logout();
  };

  return (
    <Navbar fluid={true} rounded={true}>
      <Navbar.Brand href="#">
        <img
          src="https://flowbite.com/docs/images/logo.svg"
          className="mr-3 h-6 sm:h-9"
          alt="Flowbite Logo"
        />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          Todogotchi
        </span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Button onClick={logOut}>Log Out</Button>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link
          href="/home"
          active={isHome}
          onClick={() => navigate(HOME_ROUTE)}
        >
          Home
        </Navbar.Link>
        <Navbar.Link
          href="/edit"
          active={!isHome}
          onClick={() => navigate(EDIT_ROUTE)}
        >
          Edit
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Nav;
