import React, { useState } from "react";
import Navbar from "./components/Navbar";
import axios from "axios";
import { FacebookProvider, LoginButton } from "react-facebook";

const App = () => {
  const [authenticated, setAuthenticated] = useState(false);
  const handleResponse = async (data) => {
    try {
      let userEmail = data.profile.email;
      let userUid = data.profile.id;
      const response = await axios.post("http://localhost:3000/api/v1/auth", {
        uid: userUid,
        email: userEmail,
        provider: "facebook",
      });
      let tokenHeaders = {
        ...response.headers,
        ...response.data,
        email: userEmail,
      };
      sessionStorage.setItem("auth", JSON.stringify(tokenHeaders));
      setAuthenticated(true);
      debugger;
    } catch (error) {}
  };
  return (
    <>
      <FacebookProvider appId="292980025036755">
        {authenticated && <p>Welcome {sessionStorage.storage} </p>}
        <LoginButton scope="email" onCompleted={handleResponse}>
          <span>Login Facebook</span>
        </LoginButton>
      </FacebookProvider>
      <Navbar />
    </>
  );
};

export default App;
