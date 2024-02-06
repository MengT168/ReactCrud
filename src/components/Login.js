import React from "react";
import "../CSS/Login.css";
import { useState } from "react";
function Login() {
  const [txtuser, setUser] = useState("");
  const [txtpass, setPass] = useState("");
  const [erorruser, setErrorUser] = useState("");
  const [erorrpass, setErrorPass] = useState("");
  function userLogin() {
    // alert("Hello");
    let error = 0;
    if (txtuser == "") {
      setErrorUser("Empty User");
      error = 1;
    } else {
      setErrorUser("");
    }
    if (txtpass == "") {
      setErrorPass("Empty Pass");
      error = 1;
    } else {
      setErrorPass("");
    }

    if (error == 0) {
      if (txtuser == "admin" && txtpass == "123456") {
        alert("success");
        window.location.reload();
        localStorage.setItem("Key", "admin");
        // window.location.href="/"
      } else {
        alert("Fail");
      }
    }
  }

  return (
    <div>
      <main>
        <div className="container">
          <section className="section register min-vh-100 d-flex flex-column align-items-center justify-content-center py-4">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-4 col-md-6 d-flex flex-column align-items-center justify-content-center">
                  <div className="d-flex justify-content-center py-4">
                    <a
                      href="index.html"
                      className="logo d-flex align-items-center w-auto"
                    >
                      <img src="assets/img/logo.png" alt="" />
                      <span className="d-none d-lg-block">MENG</span>
                    </a>
                  </div>

                  <div className="card mb-3">
                    <div className="card-body Q">
                      <div className="pt-4 pb-2">
                        <h5
                          className="card-title text-center pb-0 fs-4"
                          style={{ color: "white", fontFamily: "Oswald" }}
                        >
                          Login to Your Account
                        </h5>
                        <p
                          className="text-center small"
                          style={{ color: "white", fontFamily: "Oswald" }}
                        >
                          Enter your username & password to login
                        </p>
                      </div>

                      <form className="row g-3 needs-validation" novalidate>
                        <div className="col-12">
                          <label
                            for="yourUsername"
                            className="form-label"
                            style={{ color: "white", fontFamily: "Oswald" }}
                          >
                            Username
                          </label>
                          <div className="input-group has-validation">
                            <span
                              className="input-group-text"
                              id="inputGroupPrepend"
                            >
                              @
                            </span>
                            <input
                              type="text"
                              name="username"
                              className="form-control"
                              id="yourUsername"
                              value={txtuser}
                              onChange={(e) => setUser(e.target.value)}
                            />
                          </div>
                          <div style={{ color: "red" }}>{erorruser}</div>
                        </div>

                        <div className="col-12">
                          <label
                            for="yourPassword"
                            className="form-label"
                            style={{ color: "white", fontFamily: "Oswald" }}
                          >
                            Password
                          </label>
                          <input
                            type="password"
                            name="password"
                            className="form-control"
                            id="yourPassword"
                            value={txtpass}
                            onChange={(e) => setPass(e.target.value)}
                          />
                          <div style={{ color: "red" }}>{erorrpass}</div>
                        </div>

                        <div className="col-12">
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              name="remember"
                              value="true"
                              id="rememberMe"
                            />
                            <label
                              className="form-check-label"
                              for="rememberMe"
                              style={{ color: "white", fontFamily: "Oswald" }}
                            >
                              Remember me
                            </label>
                          </div>
                        </div>
                        <div className="col-12">
                          <button
                            className="btn btn-primary w-100"
                            type="submit"
                            style={{ color: "white", fontFamily: "Oswald" }}
                            onClick={userLogin}
                          >
                            Login
                          </button>
                        </div>
                        <div className="col-12">
                          <p
                            className="small mb-0"
                            style={{ color: "white", fontFamily: "Oswald" }}
                          >
                            Don't have account?{" "}
                            <a
                              href="pages-register.html"
                              style={{ color: "white", fontFamily: "Oswald" }}
                            >
                              Create an account
                            </a>
                          </p>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default Login;
