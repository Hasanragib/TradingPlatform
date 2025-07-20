import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";

function Navbar() {

  const { isLoggedIn, user, logout } = useAuth(); // Get isLoggedIn, user, and logout from context
  const handleLogout = () => {
    logout(); // Call the logout function from context
  };

  return (
    <div className="container navContainer">
      <nav
        className="navbar fixed-top navbar-expand-sm navbar-expand-md navbar-expand-lg border-bottom"
        style={{ backgroundColor: "rgba(255, 255, 255, 1)" }}
      >
        <div className="container p-2">
          <Link className="navbar-brand" to="/">
            <img
              src="media/images/logo.svg"
              alt="Logo"
              style={{ width: "8.5rem" }}
            />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <form className="d-flex" role="search"> 
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link" to="/about">
                    About
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/products">
                    Products
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/pricing">
                    Pricing
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/support">
                    Support
                  </Link>
                </li>
                 {/* Conditional rendering for Login/Signup/Logout */}
                {isLoggedIn ? (
                  <>
                    <li className="nav-item">
                      <span className="nav-link">Hi, {user?.username || 'User'}!</span> {/* Display username if available */}
                    </li>
                    <li className="nav-item">
                      <span className="nav-link">
                        <button onClick={handleLogout}>
                          Logout
                        </button>
                      </span>
                    </li>
                  </>
                ) : (
                  <>
                    <li className="nav-item">
                      <Link className="nav-link" to="/login">
                        Login
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/signup">
                        Signup
                      </Link>
                    </li>
                  </>
                )}
              </ul>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
