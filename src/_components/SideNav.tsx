import React from "react";
import { NavLink } from "react-router-dom";

import Logo from "../assets/images/logo.png";
import UserIcon from "../assets/images/user.svg";
import UserIconActive from "../assets/images/user-active.svg";
import LogoutIcon from "../assets/images/logout.svg";

export const SideNav = (): JSX.Element =>
{
  return (
    <div className="sidenav">
      <div className="sidenav-logo">
        <img src={Logo} alt="" />
      </div>
      <ul>
        <li>
          <NavLink to="/list-1">
            <div className="icon">
              <img src={UserIcon} className="in-active" alt="" />
              <img src={UserIconActive} className="active" alt="" />
            </div>
            <div className="text">CMS List-1</div>
          </NavLink>
        </li>
        <li>
          <NavLink to="/list-2">
            <div className="icon">
              <img src={UserIcon} className="in-active" alt="" />
              <img src={UserIconActive} className="active" alt="" />
            </div>
            <div className="text">CMS List-2</div>
          </NavLink>
        </li>
        <li>
          <NavLink to="/list-3">
            <div className="icon">
              <img src={UserIcon} className="in-active" alt="" />
              <img src={UserIconActive} className="active" alt="" />
            </div>
            <div className="text">CMS List-3</div>
          </NavLink>
        </li>
        <li>
          <NavLink to="/list4">
            <div className="icon">
              <img src={UserIcon} className="in-active" alt="" />
              <img src={UserIconActive} className="active" alt="" />
            </div>
            <div className="text">CMS List-4</div>
          </NavLink>
        </li>
      </ul>
      <div className="sidenav-bottom">
        <a>
          <div className="text">Logout</div>
          <div className="icon">
            <img src={LogoutIcon} alt="" />
          </div>
        </a>
      </div>
    </div>
  );
};