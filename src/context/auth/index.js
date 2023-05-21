import { createContext } from "react";
import useAuth from "../../hooks/useAuth";

export const AuthContext = createContext(null); //=> state

const AuthProvider = ({ children }) => {
  const [postAuth, data] = useAuth(); //=> custom hooks;

  const val = [postAuth, { ...data }];

  return <AuthContext.Provider value={val}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
