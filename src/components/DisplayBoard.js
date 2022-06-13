import React from "react";
import { Header } from "../components/Header";
import { Outlet } from "react-router-dom";

export const DisplayBoard = ({ numberOfUsers, getAllUsers, logoutHandle }) => {
  return (
    <>
      <Header logout={logoutHandle}></Header>

      <div className="container mrgnbtm p-5">
        <div className="row">
          <div className="col-md-8">
            <div>
              <fieldset>
                <legend>Js cookie:</legend>
                <details>
                  <summary>set cookie by JS</summary>
                  <p>
                    <b>
                      document.cookie = "jsCookie=jscookievalue; expires=Wed, 05 Aug 2022 23:00:00 UTC;
                      path=/"
                    </b>
                  </p>
                </details>
                <details>
                  <summary>Set Same name cookie</summary>
                  <p>
                    <b>
                      document.cookie = "HttpOnly-CookieKey=jscookievalue; expires=Wed, 05 Aug 2022 23:00:00
                      UTC; path=/"
                    </b>
                  </p>
                </details>
                <details>
                  <summary>Set HttpOnly cookie from JS</summary>
                  <p>
                    <b>
                      document.cookie = "jsCookie=jscookievalue; expires=Wed, 05 Aug 2022 23:00:00 UTC;
                      path=/" httpOnly=true
                    </b>
                  </p>
                </details>
              </fieldset>
            </div>
          </div>
          <div className="col-md-4">
            <div style={{ backgroundColor: "rgb(214 154 85 / 85%)" }} className="display-board">
              <h4 style={{ color: "white" }}>Users Created</h4>
              <div className="number">{numberOfUsers}</div>
              <div className="btn">
                <button type="button" onClick={(e) => getAllUsers()} className="btn btn-warning">
                  Get all Users
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Outlet />
    </>
  );
};
