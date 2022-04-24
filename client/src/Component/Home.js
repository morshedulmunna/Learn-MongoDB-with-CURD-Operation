import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [users, setUser] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/user")
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, []);

  const handleUserDelete = (_id) => {
    const proceed = window.confirm("Are you sure! you want to delete??");
    if (proceed) {
      const url = `http://localhost:5000/user/${_id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          // delete from UI ====> client side
          if (data.deletedCount > 0) {
            const remainng = users.filter((user) => user._id !== _id);
            setUser(remainng);
          }
        });
    }
  };

  return (
    <div>
      <h1>Show User {users.length} </h1>
      <ul>
        {users.map((user) => (
          <li key={user._id}>
            {user.name}
            <Link to={`/update/${user._id}`}>
              <button>Update</button>
            </Link>
            <button onClick={() => handleUserDelete(user._id)}>X</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
