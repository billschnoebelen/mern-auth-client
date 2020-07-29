import React, { useEffect } from "react";

const LinkedIn = ({ informParent = (f) => f }) => {
  useEffect(() => {
    // const updateProfile = (profile) => {
    //   console.log(profile);
    //   informParent(profile);
    // };

    const handlePostMessage = (event) => {
      //console.log("handlePostMessage", event);
      //console.log("event.data.type ", event.data.type);
      if (event.data.type === "userData") {
        informParent(event.data);
      }
    };

    window.addEventListener("message", handlePostMessage);
  }, [informParent]);

  const requestProfile = () => {
    //console.log(process.env.REACT_APP_CLIENT_ID);
    var oauthUrl = `https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=${process.env.REACT_APP_LINKEDIN_CLIENT_ID}&scope=r_liteprofile%20r_emailaddress&state=${process.env.REACT_APP_LINKEDIN_STATE}&redirect_uri=${process.env.REACT_APP_LINKEDIN_REDIRECT_URI}`;
    var width = 450,
      height = 730,
      left = window.screen.width / 2 - width / 2,
      top = window.screen.height / 2 - height / 2;

    window.open(
      //window.open(
      oauthUrl,
      "Linkedin",
      "menubar=no,location=no,resizable=no,scrollbars=no,status=no, width=" +
        width +
        ", height=" +
        height +
        ", top=" +
        top +
        ", left=" +
        left
    );
  };

  return (
    <div className="pb-3">
      <button
        onClick={requestProfile}
        className="btn btn-info btn-lg btn-block"
      >
        <i className="fab fa-linkedin pr-2"></i> Login with LinkedIn
      </button>
    </div>
  );
};

export default LinkedIn;
