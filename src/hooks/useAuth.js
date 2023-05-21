import { useState, useEffect } from "react";
import { DOMAIN_API } from "../constants";

// DESIGN PATTERN

const useAuth = () => {
  const getLocalStorage = localStorage.getItem("dataAuth");

  const [dataAuth, setAuth] = useState({});
  const [loading, setLoading] = useState(false);


  //  ketika local storage nya ada, maka update state dengan data dari local storage
  useEffect(() => {
    if (getLocalStorage) {
      setAuth(JSON.parse(getLocalStorage));
    }
  }, [getLocalStorage]);

  // hit API ketika klik submit button
  // ACTION
  const postAuth = (param) => {
    setLoading(true);
    fetch(`${DOMAIN_API}/customer/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json", // => WAJIB
      },
      body: JSON.stringify(param),
    })
      .then((res) => res.json())
      .then((result) => {
        setLoading(false);
        localStorage.setItem("dataAuth", JSON.stringify(result));
   });
  };

  return [
    postAuth,
    {
      loading,
      dataAuth,
    },
  ];
};

export default useAuth;
