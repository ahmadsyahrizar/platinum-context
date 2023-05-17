// untuk fetching data users;

import { useEffect, useState } from "react";

const useGetUsers = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!data) {
      setLoading(true);
      fetch("https://reqres.in/api/users")
        .then((res) => res.json())
        .then((data) => {
          setLoading(false);
          setData(data);
        })
        .catch((err) => setError(err));
    }
  }, [data, setData]);

  return {
    data,
    loading,
    error,
  };
};

export default useGetUsers;
