import React, { useState } from "react";

function App() {
  const [contact, setContact] = useState({
    fName: "",
    lName: "",
    email: ""
  });
  function handleClick(event) {
    //setHeadingText(fullName.fName + " " + fullName.lName);
    event.preventDefault();
  }
  function handleChange(event) {
    const {value, name} = event.target;

    setContact((prevValue) => {
      if (name === "fName") {
        return {
          fName: value,
          lName: prevValue.lName,
          email: prevValue.email
        };
      } 
      else 
      if (name === "lName") {
        return {
          fName: prevValue.lName,
          lName: value,
          email: prevValue.email
        };
      } 
      if (name === "email") {
        return {
          fName: prevValue.fname,
          lName: prevValue.lName,
          email: value
        };
      } 
    });
  }
  return (
    <div className="container">
      <h1>
        Hello {contact.fName} {contact.lName}
      </h1>
      <p>{contact.email}</p>
      <form onSubmit={handleClick}>
        <input onChange={handleChange} value={contact.fName} name="fName" placeholder="First Name" />
        <input onChange={handleChange} value={contact.lName} name="lName" placeholder="Last Name" />
        <input onChange={handleChange} value={contact.email} name="email" placeholder="Email" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
