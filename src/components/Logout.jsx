import React, { useEffect } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const Logout = () => {
  const history = useHistory();

  const logout = async () => {
    try {
      const res = fetch("/logout", {
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
        alert("logout successfully");
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    logout();
  }, []);

  return <div></div>;
};

export default Logout;
