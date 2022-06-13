import React, { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Users } from "./components/Users";
import { DisplayBoard } from "./components/DisplayBoard";
import CreateUser from "./components/CreateUser";
import LoginUser from "./components/LoginUser";
import { getAllUsers, createUser, Login, logout } from "./services/UserService";

function App() {
  const [loggedIn, setIsLogin] = useState(false);
  const [user, setUser] = useState({});
  const [users, setUsers] = useState([]);
  const [numberOfUsers, setNumberOfUsers] = useState(0);
  const navigate = useNavigate();

  const userCreate = (e) => {
    createUser(user).then((response) => {
      setNumberOfUsers(numberOfUsers + 1);
      fetchAllUsers();
    });
  };

  const userLogin = (e) => {
    Login(user).then((response) => {
      localStorage.setItem("__token", response.token);
      fetchAllUsers();
      setIsLogin(true);
      navigate("/users");
    });
  };

  const fetchAllUsers = () => {
    getAllUsers().then((users) => {
      setUsers(users);
      setNumberOfUsers(users.length);
    });
    navigate("/users/list");
  };

  const logoutHandler = () => {
    logout().then((res) => {
      localStorage.removeItem("__token");
      setIsLogin(false);
      navigate("/");
    });
  };

  useEffect(() => {}, [loggedIn]);

  const onChangeForm = (e) => {
    if (e.target.name === "firstname") {
      user.firstName = e.target.value;
    } else if (e.target.name === "lastname") {
      user.lastName = e.target.value;
    } else if (e.target.name === "email") {
      user.email = e.target.value;
    }
    setUser(user);
  };

  return (
    <div className="App">
      <Routes basename="/react-proxy">
        <Route
          path="/"
          element={<LoginUser user={user} onChangeForm={onChangeForm} LoginUser={userLogin} />}
        />
        <Route
          exact
          path="users"
          element={
            <DisplayBoard
              numberOfUsers={numberOfUsers}
              getAllUsers={fetchAllUsers}
              logoutHandle={logoutHandler}
            />
          }
        >
          <Route path="/users/list" element={<Users users={users} />} />
          <Route
            path="/users/create"
            element={<CreateUser user={user} onChangeForm={onChangeForm} createUser={userCreate} />}
          />
        </Route>
      </Routes>

      {/* {loggedIn && (
        <>
          <Header logout={logoutHandler}></Header>
          <div className="container mrgnbtm">
            <div className="row">
              <div className="col-md-8">
                <CreateUser user={user} onChangeForm={onChangeForm} createUser={userCreate}></CreateUser>
              </div>
              <div className="col-md-4">
                <DisplayBoard numberOfUsers={numberOfUsers} getAllUsers={fetchAllUsers}></DisplayBoard>
              </div>
            </div>
          </div>
          <div className="row mrgnbtm">
            <Users users={users}></Users>
          </div>
        </>
      )}
      {!loggedIn && (
        <>
          <div className="container mrgnbtm">
            <div className="row">
              <div className="col-md-8">
                <LoginUser user={user} onChangeForm={onChangeForm} LoginUser={userLogin}></LoginUser>
              </div>
            </div>
          </div>
        </>
      )} */}
    </div>
  );
}

export default App;
