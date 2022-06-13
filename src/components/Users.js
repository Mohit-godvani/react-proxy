import React from "react";
import { Link } from "react-router-dom";

export const Users = ({ users }) => {
  console.log("users length:::", users.length);
  if (users.length === 0) return null;

  const UserRow = (user, index) => {
    return (
      <tr key={index} className={index % 2 === 0 ? "odd" : "even"}>
        <td>{index + 1}</td>
        <td>{user.firstName}</td>
        <td>{user.lastName}</td>
        <td>{user.email}</td>
      </tr>
    );
  };

  const userTable = users.map((user, index) => UserRow(user, index));

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-10">
          <h2>Users</h2>
        </div>
        <div className="col-md-2">
          <Link to="/users/create" className="btn btn-danger">
            Create
          </Link>
        </div>
      </div>

      <table className="table table-bordered">
        <thead>
          <tr>
            <th>User Id</th>
            <th>Firstname</th>
            <th>Lastname</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>{userTable}</tbody>
      </table>
    </div>
  );
};
