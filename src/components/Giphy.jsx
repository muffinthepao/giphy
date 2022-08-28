import React, { useEffect, useState } from "react";

const Giphy = ({gif, gifIsLoading}) => {

  return (
    <div className="container gif-image">
      {!gifIsLoading ? (
        <img src={gif}/>
        ) : (
          <div
          style={{
            height: "270px",
          }}
          className="d-flex justify-content-center align-items-center">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
        )
      }
      
    </div>
  );
};

export default Giphy;
