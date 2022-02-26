import React, { useState } from "react";
import { Navigate } from "react-router-dom";

import { ConsumerLayout } from "../_layouts";

interface IPrivateRouteProps
{
  children: JSX.Element;
}

const PrivateRoute = ({ children }: IPrivateRouteProps): JSX.Element =>
{
  const [isAuth, setIsAuth] = useState(true);

  return isAuth ? <ConsumerLayout>{children}</ConsumerLayout> : <Navigate to="/" />;
};

export { PrivateRoute };
