import React from "react";

const AddUser = () => {
  const fomrHandler = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;

    const user = { name, email };

    // console.log(user);

    fetch("http://localhost:5000/user", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        alert("User added Succesfully");
        e.target.reset();
      });
  };

  return (
    <div className="user">
      <h1>Add One User</h1>
      <form onSubmit={fomrHandler}>
        <input type="text" name="name" required placeholder="Enter Your Name" />
        <input type="text" name="email" placeholder="Enter email" required />
        <input type="submit" value="Add user" />
      </form>
    </div>
  );
};

export default AddUser;
