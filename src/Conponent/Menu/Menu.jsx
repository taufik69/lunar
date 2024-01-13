import React from "react";
import "./Menu.css";
import logo from "../../assets/logo.png";
import { MdKeyboardArrowDown } from "react-icons/md";
const Menu = () => {
  return (
    <>
      <nav className="nav">
        <div className="container">
          <div className="menuWrapper">
            <div className="menuWrapperLogo">
              <picture>
                <img src={logo} alt={logo} />
              </picture>
            </div>
            <div className="menuWrapperItem">
              <ul className="menuList">
                <li className="menuList__item">
                  <a href="#">Services</a>
                </li>
                <li className="menuList__item">
                  <a href="#">Industries</a>
                </li>
                <li className="menuList__item">
                  <a href="#">About Us</a>
                </li>
                <li className="menuList__item">
                  <a href="#">Team Lunar</a>
                </li>
                <li className="menuList__item menuList--withIcon ">
                  <a href="#">Blog</a>
                  <MdKeyboardArrowDown className="down__arrow" />
                </li>
              </ul>
            </div>
            <div className="menuWrapperBtn">
              <button className="menuWrapperBtn__contact">Contact us</button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Menu;
