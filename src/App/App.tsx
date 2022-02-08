import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "../assets/stylesheets/style.sass";
import { Login } from "../LoginPages";
import { history } from "../_helpers";
import { PublicRoute } from "../_routes/PublicRoute";


export const App = (): JSX.Element =>
{
  return (
    <div className="main-content">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PublicRoute><Login /></PublicRoute>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}