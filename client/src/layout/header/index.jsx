import React from "react";
import { Link, Navigate, NavLink, useNavigate } from "react-router-dom";
import "./index.scss";
import { DownOutlined } from "@ant-design/icons";
import { Dropdown, Space } from "antd";
import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";

const Header = () => {
  const categories = [
    {
      label: <Link to={"/categories/html"}>HTML</Link>,
      key: "0",
    },
    {
      label: <Link to={"/categories/wordpress"}>WordPress</Link>,
      key: "1",
    },
    {
      label: <Link to={"/categories/laravel"}>Laravel</Link>,
      key: "2",
    },
    {
      label: <Link to={"/categories/javascript"}>JavaScript</Link>,
      key: "3",
    },
    {
      label: <Link to={"/categories/python"}>Python</Link>,
      key: "4",
    },
    {
      type: "divider",
    },
  ];
  const courses = [
    {
      label: <Link to={"/courses/html"}>HTML</Link>,
      key: "0",
    },
    {
      label: <Link to={"/courses/wordpress"}>WordPress</Link>,
      key: "1",
    },
    {
      label: <Link to={"/courses/laravel"}>Laravel</Link>,
      key: "2",
    },
    {
      label: <Link to={"/courses/javascript"}>JavaScript</Link>,
      key: "3",
    },
    {
      label: <Link to={"/courses/python"}>Python</Link>,
      key: "4",
    },
    {
      type: "divider",
    },
  ];
  const profileDropdown = [
    {
      label: <button onClick={() => logOut()}>Log Out</button>,
      key: "0",
    },
    {
      type: "divider",
    },
  ];
  const [login, setLogin] = useState(false);
  let student = JSON.parse(localStorage.getItem("student"));

  const [profile, setProfile] = useState();
  console.log(student);
  useEffect(() => {
    if (student) {
      setProfile(student);
      setLogin(true);
    }
  }, []);
  const logOut = () => {
    setLogin(false);
    localStorage.removeItem("student");
  };
  let a = (
    <div className="loginAndRegister">
      <Link to={"/login"}>Login</Link>/<Link to={"/register"}>Register</Link>
    </div>
  );
  let b = (
    <Dropdown
      menu={{
        items: profileDropdown,
      }}
    >
      <a onClick={(e) => e.preventDefault()}>
        <Space>
          {student?.result.username}
          <i className="fa-solid fa-sort-down"></i>
        </Space>
      </a>
    </Dropdown>
  );
  return (
    <div id="header">
      <div className="container">
        <div className="header">
          <Link to={"/"} className="university">
            UNIVERSITY
          </Link>
          <nav>
            <NavLink to={"/"}>Home</NavLink>
            <Dropdown
              menu={{
                items: courses,
              }}
            >
              <a onClick={(e) => e.preventDefault()}>
                <Space>
                  Courses
                  <i className="fa-solid fa-sort-down"></i>
                </Space>
              </a>
            </Dropdown>
            <Dropdown
              menu={{
                items: categories,
              }}
            >
              <a onClick={(e) => e.preventDefault()}>
                <Space>
                  Catagories
                  <i className="fa-solid fa-sort-down"></i>
                </Space>
              </a>
            </Dropdown>
            <NavLink to={"/blog"}>Blog</NavLink>
            <NavLink to={"/about"}>About</NavLink>
            <NavLink to={"/contact"}>Contact</NavLink>
          </nav>
          {login ? b : a}
        </div>
      </div>
    </div>
  );
};

export default Header;
