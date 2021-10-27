import { React, useState } from "react";
import { GoogleLogin } from "react-google-login";
import { useHistory } from "react-router";
import { clientId } from "./GoogleAuthConfig";

const Login = () => {
  const history = useHistory();

  const gAuthResponseHandler = (response) => {
    console.log(response.tokenId);
    console.log(response);

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        idToken: response.tokenId,
        provider: "Google",
      }),
    };

    fetch("https://6172d9e8110a740017222e61.mockapi.io/posts", requestOptions)
      .then((response) => response.json())
      .then((data) => {
        debugger;
        console.log(data);
        history.push("/dashboard");
      });

    // console.log(response.getAuthResponse().id_token);
  };

  const error = (response) => {
    console.error(response); // eslint-disable-line
  };

  return (
    <div style={{ marginTop: "30px" }}>
      <GoogleLogin
        theme="dark"
        clientId={clientId}
        buttonText="Login with Google account"
        onSuccess={gAuthResponseHandler}
        onFailure={error}
        cookiePolicy={"single_host_origin"}
        // isSignedIn={true}
        uxMode="redirect"
        redirectUri="https://localhost:3000/dashboard"
      />
    </div>
  );
};

export default Login;
