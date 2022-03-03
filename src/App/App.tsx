import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "../assets/stylesheets/style.sass";
import { DEMO_CHARTS_ROUTE, DEMO_INPUT_VARIANTS_ROUTE, DEMO_LIST1_ITEM_EDIT_ROUTE, DEMO_LIST1_ROUTE, ROOT_ROUTE } from "../_constants/route.constants";
import { PublicRoute, PrivateRoute } from "../_routes";
import { Login } from "../LoginPages";
import { EditListItem, ListIndex } from "../ListPages";
import { InputVariants } from "../InputVariantsPage";
import { Charts } from "../ChartPage";


export const App = (): JSX.Element =>
{
  return (
    <div className="main-content">
      <BrowserRouter >
        <Routes>
          <Route
            path={ROOT_ROUTE}
            element={<PublicRoute><Login /></PublicRoute>}
          />
          <Route
            path={DEMO_LIST1_ROUTE}
            element={<PrivateRoute><ListIndex /></PrivateRoute>}
          />
          <Route
            path={DEMO_LIST1_ITEM_EDIT_ROUTE}
            element={<PrivateRoute><EditListItem /></PrivateRoute>}
          />
          <Route
            path={DEMO_INPUT_VARIANTS_ROUTE}
            element={<PrivateRoute><InputVariants /></PrivateRoute>}
          />
          <Route
            path={DEMO_CHARTS_ROUTE}
            element={<PrivateRoute><Charts /></PrivateRoute>}
          />
        </Routes>
      </BrowserRouter>
    </div>
  )
}