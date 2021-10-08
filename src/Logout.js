import { React } from "react";
import { GoogleLogout } from "react-google-login";
import { useHistory } from "react-router";
import { clientId } from "./GoogleAuthConfig";

const Logout = () => {
  const history = useHistory();
  const gAccountLogoutHandler = () => {
    history.push("/login");
  };
  return (
    <div>
      <GoogleLogout
        theme="dark"
        clientId={clientId}
        buttonText="Logout from Google"
        onLogoutSuccess={gAccountLogoutHandler}
      />
    </div>
  );
};

export default Logout;
