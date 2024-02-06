import React from "react";
import DashBoardPage from "./Page/DashBoardPage";
import { Link, Route, Routes } from "react-router-dom";
import Borrowers from "./Page/Borrowers";
import PaymentPage from "./Page/PaymentPage";
import LoanTypePage from "./Page/LoanTypePage";
import LoanPlan from "./Page/LoanPlan";
import User from "./Page/User";

function DashBoard() {
  function Logout() {
    localStorage.removeItem("Key");
    window.location.href = "/login";
  }

  return (
    <div>
      <header
        id="header"
        className="header fixed-top d-flex align-items-center"
      >
        <div className="d-flex align-items-center justify-content-between">
          <a href="index.html" className="logo d-flex align-items-center">
            {/* <img src="assets/img/logo.png" alt=""/> */}
            <span className="d-none d-lg-block">LOAN SYSTEM</span>
          </a>
          <i className="bi bi-list toggle-sidebar-btn"></i>
        </div>
        {/* <!-- End Logo --> */}

        <nav className="header-nav ms-auto">
          <ul className="d-flex align-items-center">
            <li className="nav-item d-block d-lg-none">
              <a className="nav-link nav-icon search-bar-toggle " href="#">
                <i className="bi bi-search"></i>
              </a>
            </li>

            <li className="nav-item dropdown pe-3">
              <a
                className="nav-link nav-profile d-flex align-items-center pe-0"
                href="#"
                data-bs-toggle="dropdown"
              >
                <img
                  src="assets/img/1010.jpg"
                  alt="Profile"
                  className="rounded-circle"
                />
                <span className="d-none d-md-block dropdown-toggle ps-2">
                  T.HOKMENG
                </span>
              </a>
              {/* <!-- End Profile Iamge Icon --> */}

              <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow profile">
                <li className="dropdown-header">
                  <h6>Taing Hokmeng</h6>
                  <span>Web Deverloper</span>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>

                <li>
                  <a
                    className="dropdown-item d-flex align-items-center"
                    href="users-profile.html"
                  >
                    <i className="bi bi-person"></i>
                    <span>My Profile</span>
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>

                <li>
                  <a
                    className="dropdown-item d-flex align-items-center"
                    href="users-profile.html"
                  >
                    <i className="bi bi-gear"></i>
                    <span>Account Settings</span>
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>

                <li>
                  <a
                    className="dropdown-item d-flex align-items-center"
                    href="pages-faq.html"
                  >
                    <i className="bi bi-question-circle"></i>
                    <span>Need Help?</span>
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>

                <li>
                  <a
                    className="dropdown-item d-flex align-items-center"
                    href="#"
                    onClick={Logout}
                  >
                    <i className="bi bi-box-arrow-right"></i>
                    <span>Sign Out</span>
                  </a>
                </li>
              </ul>
              {/* <!-- End Profile Dropdown Items --> */}
            </li>
            {/* <!-- End Profile Nav --> */}
          </ul>
        </nav>
        {/* <!-- End Icons Navigation --> */}
      </header>

      <aside id="sidebar" class="sidebar">
        <ul class="sidebar-nav" id="sidebar-nav">
          <li class="nav-item">
            <Link class="nav-link " to={"/"} onClick={(e) => e.preventDefault}>
              <i class="bi bi-grid"></i>
              <span>Dashboard</span>
            </Link>
          </li>

          <li class="nav-item">
            <Link
              class="nav-link collapsed"
              href="users-profile.html"
              to={"/loantype"}
              onClick={(e) => e.preventDefault}
            >
              <i class="fa-solid fa-landmark"></i>
              <span>Loan Types</span>
            </Link>
          </li>

          <li class="nav-item">
            <Link
              class="nav-link collapsed"
              href="users-profile.html"
              to={"/loanpane"}
              onClick={(e) => e.preventDefault}
            >
              <i class="fa-solid fa-landmark"></i>
              <span>Loan Plans</span>
            </Link>
          </li>

          <li class="nav-item">
            <Link
              class="nav-link collapsed"
              href="users-profile.html"
              to={"/payment"}
              onClick={(e) => e.preventDefault}
            >
              <i class="fa-solid fa-money-bills"></i>
              <span>Payment</span>
            </Link>
          </li>
          {/* <!-- End Profile Page Nav --> */}

          <li class="nav-item">
            <Link
              class="nav-link collapsed"
              href="pages-faq.html"
              to={"/borrowers"}
              onClick={(e) => e.preventDefault}
            >
              <i class="fa-solid fa-users"></i>
              <span>Borrowers</span>
            </Link>
          </li>
          {/* <!-- End F.A.Q Page Nav --> */}

          <li class="nav-item">
            <Link
              class="nav-link collapsed"
              href="pages-contact.html"
              onClick={(e) => e.preventDefault}
              to={"/user"}
            >
              <i class="fa-solid fa-users"></i>
              <span>Users</span>
            </Link>
          </li>
        </ul>
      </aside>
      <main id="main" class="main">
        {/* <!-- End Page Title --> */}

        <section class="section dashboard">
          <Routes>
            <Route path="/" element={<DashBoardPage />} />
            <Route path="/payment" element={<PaymentPage />} />
            <Route path="/loantype" element={<LoanTypePage />} />
            <Route path="/loanpane" element={<LoanPlan />} />
            <Route path="/borrowers" element={<Borrowers />} />
            <Route path="/user" element={<User />} />
          </Routes>
        </section>
      </main>
    </div>
  );
}

export default DashBoard;
