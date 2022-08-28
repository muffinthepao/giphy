import React from "react";
import Alert from "react-bootstrap/Alert";

const errorBanner = () => {
  return (
    <>
      <Alert key="danger" variant="danger">
        Unable to get Gifs. Please try again later
      </Alert>
    </>
  );
};

export default errorBanner;
