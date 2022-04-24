import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const UpdateUser = () => {
  const { id } = useParams();
  const [user, setUser] = useState({});

  useEffect(() => {
    const url = `http://localhost:5000/user/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, [id]);

  const updateUser = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;

    const user = { name, email };

    fetch(`http://localhost:5000/user/${id}`, {
      method: "PUT",
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
    <div>
      <h2>Updateing User</h2>
      <form onSubmit={updateUser}>
        <input type="text" name="name" required placeholder="Enter Your Name" />
        <input type="text" name="email" placeholder="Enter email" required />
        <input type="submit" value="Update User" />
      </form>
    </div>
  );
};

export default UpdateUser;
