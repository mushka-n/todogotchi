import React, { useContext, useState } from "react";
import { Label, TextInput, Button } from "flowbite-react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { HOME_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE } from "../utils/consts";
import { observer } from "mobx-react-lite";
import { Context } from "../index";
// import UserAPI from "../API/userAPI";
// import BasketAPI from "../API/basketAPI";

const Auth = observer(() => {
  const { user } = useContext(Context);
  const location = useLocation();
  const navigate = useNavigate();
  const isLogin = location.pathname === LOGIN_ROUTE;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const click = async () => {
    user.setUser({
      displayName: "Nikita Mushka",
      email: "nikitamushka@.mail.ru",
    });
    localStorage.setItem("token", "token");
    user.setIsAuth(true);
    navigate(HOME_ROUTE);
    // try {
    //   let userData = {};
    //   if (isLogin) {
    //     userData = await UserAPI.login(email, password);
    //   } else {
    //     userData = await UserAPI.registration(email, password);
    //     await BasketAPI.createBasket(userData.user.id);
    //   }
    //   localStorage.setItem("token", userData.accessToken);
    //   user.setUser(userData.user);
    //   user.setIsAuth(true);
    //   navigate(SHOP_ROUTE);
    // } catch (e) {
    //   alert(e.response.data.message);
    // }
  };

  return (
    <div className="w-full h-[calc(100vh-54.5px)] flex items-center justify-center">
      <div className=" w-80 h-auto">
        <form className="flex flex-col gap-4">
          <div>
            <Label className="mb-2 block" htmlFor="email2">
              Your email
            </Label>
            <TextInput
              id="email2"
              type="email"
              placeholder="name@flowbite.com"
              required={true}
              shadow={true}
            />
          </div>
          <div>
            <Label className="mb-2 block" htmlFor="password2">
              Your password
            </Label>
            <TextInput
              id="password2"
              type="password"
              required={true}
              shadow={true}
            />
          </div>
          {!isLogin && (
            <div>
              <Label className="mb-2 block" htmlFor="repeat-password">
                Repeat password
              </Label>
              <TextInput
                id="repeat-password"
                type="password"
                name="password"
                autocomplete="on"
                required={true}
                shadow={true}
              />
            </div>
          )}
          <div className="flex items-center gap-2">
            <Label>
              {isLogin ? (
                <div>
                  No account?{" "}
                  <NavLink
                    className="text-blue-600 hover:underline dark:text-blue-500"
                    to={REGISTRATION_ROUTE}
                  >
                    Register!
                  </NavLink>
                </div>
              ) : (
                <div>
                  Have an account?{" "}
                  <NavLink
                    className="text-blue-600 hover:underline dark:text-blue-500"
                    to={LOGIN_ROUTE}
                  >
                    Log In!
                  </NavLink>
                </div>
              )}
            </Label>
          </div>
          <div className="flex items-end"></div>
          <Button onClick={click} type="submit">
            {isLogin ? "Login" : "Register"}
          </Button>
        </form>
      </div>
    </div>
  );
});

export default Auth;
