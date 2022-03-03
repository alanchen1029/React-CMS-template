import React from "react";
import { NavLink } from "react-router-dom";

import Logo from "../assets/images/logo.png";
import UserIcon from "../assets/images/user.svg";
import UserIconActive from "../assets/images/user-active.svg";
import LogoutIcon from "../assets/images/logout.svg";
import { DEMO_CHARTS_ROUTE, DEMO_INPUT_VARIANTS_ROUTE, DEMO_LIST1_ROUTE } from "../_constants/route.constants";

export const SideNav = (): JSX.Element =>
{
  return (
    <div className="sidenav">
      <div className="sidenav-logo">
        <img src={Logo} alt="" />
      </div>
      <ul>
        <li>
          <NavLink to={DEMO_LIST1_ROUTE}>
            <div className="icon">
              <img src={UserIcon} className="in-active" alt="" />
              <img src={UserIconActive} className="active" alt="" />
            </div>
            <div className="text">CMS LIST-1</div>
          </NavLink>
        </li>
        <li>
          <NavLink to={DEMO_INPUT_VARIANTS_ROUTE}>
            <div className="icon">
              <img src={UserIcon} className="in-active" alt="" />
              <img src={UserIconActive} className="active" alt="" />
            </div>
            <div className="text">INPUT VARIANTS</div>
          </NavLink>
        </li>
        <li>
          <NavLink to={DEMO_CHARTS_ROUTE}>
            <div className="icon">
              <img src={UserIcon} className="in-active" alt="" />
              <img src={UserIconActive} className="active" alt="" />
            </div>
            <div className="text">Charts</div>
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