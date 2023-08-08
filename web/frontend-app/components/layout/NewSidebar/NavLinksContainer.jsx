import React, { useState, useEffect } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { logout } from "../../../service";
import { BiHomeAlt } from "react-icons/bi";
import { FaRegImages } from "react-icons/fa";
import { RiImageAddLine } from "react-icons/ri";
import { HiOutlineVideoCamera } from "react-icons/hi";
import { AiFillAccountBook, AiOutlineBars } from "react-icons/ai";
import { axiosOpen } from "../../../api/axios";
import { getUserID } from "../../../service/service";
import useAuth from "../../../Hooks/useAuth";
import clsx from "clsx";
import { MdSubscriptions } from "react-icons/md";

const NavLinksContainer = ({ showMenu }) => {
  const navigate = useNavigate();
  const userid = getUserID();
  const { setAuth } = useAuth();
  const currentPath = window.location.pathname;
  console.log(currentPath);
  const handleLogout = () => {
    setAuth({
      role: "",
      loggedIn: false,
    });
    logout();
    navigate("/login", { replace: true });
  };

  // const handleClearConversation = async () => {
  //   const confirmDelete = window.confirm("Are you sure you want to delete?");
  //   if (confirmDelete) {
  //     // make delete request or perform delete action
  //   } else {
  //     return; // do nothing
  //   }

  //   const response = await axiosOpen.put("api/prompt/clearconversations/", {
  //     userid,
  //   });
  //   const { status } = response;
  //   if (status === 200) {
  //     setChatLog([]);
  //     navigate("/prompt", { replace: true });
  //     window.location.reload();
  //   }
  // };

  //write code to clear single conversation based on thread id

  // const [role, setRole] = useState("");
  // const userId = getUserID();

  // useEffect(() => {
  //   async function fetchData() {
  //     const userid = {
  //       userId: userId,
  //     };
  //     const response = await axiosOpen.get("api/user/getuser", {
  //       headers: {
  //         authorization: "Bearer " + localStorage.userToken,
  //       },
  //     });
  //     setRole(response?.data?.user?.role);
  //   }
  //   fetchData();
  // }, []);

  return (
    <div className="navLinks ">
      <div className="nav-link-container sidenav">
        <div className="menu-container">
          <NavLink
            end
            className={clsx(
              "nav-link-img-container ",
              showMenu ? "flex-column" : "flex-row"
            )}
            to="/dashboard"
            style={({ isActive, isPending }) => {
              return {
                fontWeight: isActive ? "600" : "500",
                color: isPending ? "red" : "black",
                background: isActive ? "#bfbdf7" : "#FFFFFF",
              };
            }}
          >
            <img src="/home.svg" alt="home" className="nav-img" />

            <span className={clsx(showMenu ? "d-flex" : "d-none")}>Home</span>
          </NavLink>
          <NavLink
            end
            className={clsx(
              "nav-link-img-container ",
              showMenu ? "flex-column" : "flex-row"
            )}
            to="/dashboard/remove-background"
            style={({ isActive, isPending }) => {
              return {
                fontWeight: isActive ? "600" : "500",
                color: isPending ? "red" : "black",
                background: isActive ? "#bfbdf7" : "#FFFFFF",
              };
            }}
          >
            <img
              src="/assets/images/photo_prints.png"
              alt="home"
              className="nav-img"
            />

            <span className={clsx(showMenu ? "d-flex" : "d-none")}>
              Product Image <br /> Background Remover
            </span>
          </NavLink>
          <NavLink
            className={clsx(
              "nav-link-img-container ",
              showMenu ? "flex-column" : "flex-row"
            )}
            to="/dashboard/generate-image"
            style={({ isActive, isPending }) => {
              return {
                fontWeight: isActive ? "600" : "500",
                color: isPending ? "red" : "black",
                background: isActive ? "#bfbdf7" : "#FFFFFF",
              };
            }}
          >
            <img
              src="/assets/images/gallery.png"
              alt="home"
              className="nav-img"
            />

            <span className={clsx(showMenu ? "d-flex" : "d-none")}>
              Change Background <br /> with AI
            </span>
          </NavLink>
          <NavLink
            className={clsx(
              "nav-link-img-container ",
              showMenu ? "flex-column" : "flex-row"
            )}
            to="/dashboard/text-to-image"
            style={({ isActive, isPending }) => {
              return {
                fontWeight: isActive ? "600" : "500",
                color: isPending ? "red" : "black",
                background: isActive ? "#bfbdf7" : "#FFFFFF",
              };
            }}
          >
            <img src="/home.svg" alt="home" className="nav-img" />

            <span className={clsx(showMenu ? "d-flex" : "d-none")}>
              New product image <br /> generator
            </span>
          </NavLink>
          <NavLink
            className={clsx(
              "nav-link-img-container ",
              showMenu ? "flex-column" : "flex-row"
            )}
            to="/dashboard/generate-video"
            style={({ isActive, isPending }) => {
              return {
                fontWeight: isActive ? "600" : "500",
                color: isPending ? "red" : "black",
                background: isActive ? "#bfbdf7" : "#FFFFFF",
              };
            }}
          >
            <img src="/home.svg" alt="home" className="nav-img" />

            <span className={clsx(showMenu ? "d-flex" : "d-none")}>
              Text to video generator
            </span>
          </NavLink>
          <NavLink
            className={clsx(
              "nav-link-img-container ",
              showMenu ? "flex-column" : "flex-row"
            )}
            to="/dashboard/projects"
            style={({ isActive, isPending }) => {
              return {
                fontWeight: isActive ? "600" : "500",
                color: isPending ? "red" : "black",
                background: isActive ? "#bfbdf7" : "#FFFFFF",
              };
            }}
          >
            <img src="/home.svg" alt="home" className="nav-img" />

            <span className={clsx(showMenu ? "d-flex" : "d-none")}>
              Projects
            </span>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default NavLinksContainer;
