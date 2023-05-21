import { useContext } from "react";
import { AuthContext } from "../../../context/auth";

const LandingPage = () => {
    const [, data] = useContext(AuthContext);
    const { email } = data?.dataAuth || {};

    return (
        <div>
            WELCOME BACK  <b>{email} !</b>
        </div>
    )
}

export default LandingPage