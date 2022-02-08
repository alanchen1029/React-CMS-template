import React from "react";
import { Navigate } from "react-router";

import { ConsumerLayout } from "../_layouts";

interface IPrivateRouteProps
{
  children: JSX.Element;
}

const PrivateRoute = ({ children }: IPrivateRouteProps): JSX.Element =>
{
  const isAuth = React.useState(true);

  return isAuth ? <ConsumerLayout>{children}</ConsumerLayout> : <Navigate to="/" />;
};

export { PrivateRoute };
