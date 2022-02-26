import React from "react";

import { SideNav } from "../_components";

class ConsumerLayout extends React.Component
{
  render(): JSX.Element
  {
    return (
      <div className="layout-consumer">
        <SideNav />
        <div className="consumer-main">{this.props.children}</div>
      </div>
    );
  }
}

export { ConsumerLayout };
