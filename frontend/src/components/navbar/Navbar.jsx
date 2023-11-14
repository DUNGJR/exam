import React from "react";
import "./navbar.css";
import logo from "../../assets/logo.png";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-links">
        <div className="navbar-links_logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="navbar-links_container">
          <p>
            <a href="#home">Trang chủ</a>
          </p>
          <p>
            <a href="#course">Khóa học</a>
          </p>
          <p>
            <a href="#exam">Đề thi</a>
          </p>
          <p>
            <a href="#blog">Tin tức</a>
          </p>
        </div>
      <div className="navbar-search">
        <p>Tìm kiếm</p>
      </div>
      </div>
      <div className="navbar-link_sign">
        <button>Đăng nhập</button>
      </div>
    </div>
  );
};
export default Navbar;
