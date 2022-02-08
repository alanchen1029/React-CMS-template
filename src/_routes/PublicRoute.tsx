import React from "react";

import { DeviseLayout } from "../_layouts";

interface IPublicRouteProps
{
  children: JSX.Element;
}

const PublicRoute = ({ children }: IPublicRouteProps): JSX.Element =>
{
  return <DeviseLayout>{children}</DeviseLayout>;
};

export { PublicRoute };
