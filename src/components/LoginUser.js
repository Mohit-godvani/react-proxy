import React from "react";

const LoginUser = ({ onChangeForm, LoginUser }) => {
  return (
    <div className="container p-3 my-3 bg-primary text-white">
      <div className="row ">
        <div className="col-md-7 mrgnbtm">
          <h2>LogIn</h2>
          <form>
            <div className="row ">
              <div className="form-group col-md-12">
                <label htmlFor="exampleInputEmail1">Email</label>
                <input
                  type="text"
                  onChange={(e) => onChangeForm(e)}
                  className="form-control"
                  name="email"
                  id="email"
                  aria-describedby="emailHelp"
                  placeholder="Email"
                />
              </div>
            </div>
            <button type="button" onClick={(e) => LoginUser(e)} className="btn btn-danger">
              Go
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginUser;
