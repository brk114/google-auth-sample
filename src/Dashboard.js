import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import Logout from "./Logout";
import { OAuth2Client, goog } from "google-auth-library";
import { clientId } from "./GoogleAuthConfig";

const Dashboard = () => {
  const [user, setUser] = useState();
  const responseGoogle = (response) => {
    console.log(response);
    setUser(response.Qt);
  };
  const logout = () => {
    console.log("logged out");
    setUser();
  };
  useEffect(() => {
    let authObj;
    window.gapi.load("auth2", () => {
      window.gapi.auth2
        .init({
          client_id: clientId,
        })
        .then(() => {
          authObj = window.gapi.auth2.getAuthInstance();
          if (authObj.isSignedIn.get()) {
            const userObj = authObj.currentUser.get();
            debugger;
            // const client = new OAuth2Client(
            //   "YOUR_CLIENT_ID_HERE.apps.googleusercontent.com"
            // );
            // async function verify() {
            //   const ticket = await client.verifyIdToken({
            //     idToken: userObj.wc.id_token,
            //     audience: "YOUR_CLIENT_ID_HERE.apps.googleusercontent.com",
            //   });
            //   const payload = ticket.getPayload();
            //   const userid = payload["sub"];
            // }
            // verify()
            //   .then(() => setUser(userObj.Qt))
            //   .catch(console.error);
          }
        })
        .catch((err) => {
          console.error(err);
        });
    });
  }, []);

  return (
    <div>
      <h2>Dashboard</h2>
      <Logout />
      <img src={logo} className="App-logo" alt="logo" />
    </div>
  );
};

export default Dashboard;
