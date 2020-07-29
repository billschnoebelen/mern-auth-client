//Notes: Going to punt for now. Linked in is difficult. If successful, I can
//pay instructor to create this feature. Merging accounts would also be nice,
//if a user logins with different accounts.

//Is there any advantage of LinkedIn Oauth over google or facebook Oauth?
//Both FB and google readily give me the users email which I can thenS
//uniquely link the user to in my database. They can signin with either
//email, FB, or Google and get the same history. With Linkedin there is
//no cross link without the email.

// https://www.youtube.com/watch?v=jYflkIo1R4A
// redirectURI=http://localhost:3000/linkedin
// URLENCODE(redirectURI)=http%3A%2F%2Flocalhost%3A3000%2Flinkedin
// clientId=86ejsa8l6klz9d
// clientSecret=W0ojrW7R67sblI9d

import React from "react";
import { LinkedIn } from "react-linkedin-login-oauth2";
import axios from "axios";

const LinkedInButton = ({ informParent = (f) => f }) => {
  const responseLinkedIn = (response) => {
    console.log(response);
    // axios({
    //   method: "POST",
    //   url: `${process.env.REACT_APP_API}/google-login`,
    //   data: { idToken: response.tokenId },
    // })
    //   .then((response) => {
    //     console.log("GOOGLE SIGNIN SUCCESS", response);
    //     // inform parent component
    //     informParent(response);
    //   })
    //   .catch((error) => {
    //     console.log("GOOGLE SIGNIN ERROR", response);
    //   });
  };

  const handleFailure = (error) => {
    console.log({
      code: "",
      errorMessage: error.errorMessage,
    });
  };

  return (
    <div className="pb-3">
      <LinkedIn
        clientId={`${process.env.REACT_APP_LINKEDIN_CLIENT_ID}`}
        onFailure={handleFailure}
        onSuccess={responseLinkedIn}
        redirectUri="http%3A%2F%2Flocalhost%3A3000%2Flinkedin"
        renderElement={({ onClick, disabled }) => (
          <button onClick={onClick} className="btn btn-info btn-lg btn-block">
            <i className="fab fa-linkedin pr-2"></i> Login with LinkedIn
          </button>
        )}
      />
    </div>
  );
};

export default LinkedInButton;
