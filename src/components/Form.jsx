import React, { useEffect, useState } from "react";

const Form = (prop) => {

  const handleSubmit = (e) => {
    //prevent default form behaviour
    e.preventDefault()

    //targets specific element name. in this case it's "query"
    console.log("after onSubmit: ", e.target.inputQuery.value)
    prop.handleSubmit(e.target.inputQuery.value)
  }
  
  return (
    <form className="form" onSubmit={handleSubmit}>
      <label>

        <input type="text" name="inputQuery" placeholder="Search for Gifs"/>
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
};

export default Form;