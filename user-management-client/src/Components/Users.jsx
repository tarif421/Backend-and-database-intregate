import React, { use } from "react";

const Users = ({ userPromise }) => {
  const user = use(userPromise);
  // console.log(user);

  const handleAddUser = (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    console.log(name, email);

    // send data to the server
    fetch("http://localhost:3000/users", {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      }
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("after post", data);
      });
  };
  return (
    <div>
      <h3>Add a user</h3>
      <form onSubmit={handleAddUser}>
        <input type="text" name="name" />

        <br />
        <input type="email" name="email" id="" />
        <br />
        <button>Add user</button>
      </form>
      <div>
        {user.map((data) => (
          <p key={data.id}>
            Name: {data.name} <br /> Email: {data.email}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Users;
