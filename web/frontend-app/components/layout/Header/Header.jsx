import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../../assests/images/NewLogo.png";
import { getUserID } from "../../../service/service";
import { axiosOpen } from "../../../api/axios";
import { IoIosArrowDown } from "react-icons/io";
import { NewAuthContext } from "../../../contexts/NewAuthProvider";

const Header = () => {
  const { logout } = useContext(NewAuthContext);
  const navigate = useNavigate();
  const userName = localStorage.userName && localStorage.userName;
  const [role, setRole] = useState("");
  const userId = getUserID();

  const firstLtr = userName ? userName.charAt(0).toUpperCase() : "User";

  useEffect(() => {
    async function fetchData() {
      const userid = {
        userId: userId,
      };
      const response = await axiosOpen.get("api/user/getuser", {
        headers: {
          authorization: "Bearer " + localStorage.userToken,
        },
      });
      setRole(response?.data?.user?.role);
    }
    fetchData();
  }, []);

  const handleLogout = () => {
    localStorage.clear();
    logout();
    navigate("/login");
  };

  return (
    <>
      <nav
        className="navbar navbar-expand sticky-top"
        aria-label="Second navbar example"
      >
        <div className="container-fluid px-0 d-flex  justify-content-between  align-items-center">
          <div className="logo">
            <div>
              <h2 className="logo-text">
                FYTECH <span className="fw-normal">AI</span>{" "}
              </h2>
            </div>
          </div>
          <div className="header-dropdown">
            <div
              class="btn-group gap-2 align-items-center d-flex "
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <button class=" dropdown-btn" type="button">
                {firstLtr}
              </button>
              <IoIosArrowDown className="dropdown-icon" />
              <ul class="dropdown-menu dropdown-menu-lg-end">
                <li>
                  <a class="dropdown-item" href="/dashboard/userprofile">
                    Profile
                  </a>
                </li>

                <li onClick={handleLogout}>
                  <a class="dropdown-item" href="#">
                    Log out
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
