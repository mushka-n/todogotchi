import Navbar from "./components/Nav/Navbar";
import AppRouter from "./components/AppRouter/AppRouter";
import { BrowserRouter } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { Context } from ".";

export default function App() {
  const { user } = useContext(Context);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    if (localStorage.getItem("token")) {
      localStorage.setItem("token", "token");
      user.setIsAuth(true);
      user.setUser({
        displayName: "Nikita Mushka",
        email: "nikitamushka@.mail.ru",
      });

      setIsLoading(false);
      // UserAPI.refresh()
      //   .then((result) => {
      //     localStorage.setItem("token", result.accessToken);
      //     user.setIsAuth(true);
      //     user.setUser(result.user);
      //   })
      //   .finally(setIsLoading(false));
    } else {
      setIsLoading(false);
    }
  }, [user]);

  if (isLoading) {
    return <></>;
  }

  return (
    <BrowserRouter>
      <Navbar />
      <div className="text-center">
        <AppRouter />
      </div>
    </BrowserRouter>
  );
}
