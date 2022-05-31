import React, { useEffect } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const Logout = () => {
  const history = useHistory();

  const logoutHandler = async () => {
    try {
      const res = await fetch("/logout", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        credentials: "include",
      });

      if (res === 401 || !res) {
        alert("please logout later");
      } else {
        history.push("/");
        window.location.reload();
        alert("logout successfully");
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    logoutHandler();
  }, []);

  return <div></div>;
};

export default Logout;
