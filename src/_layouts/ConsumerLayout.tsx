import React from "react";

// import { OrganizationSideNav } from "./components";

class ConsumerLayout extends React.Component
{
  render(): JSX.Element
  {
    return (
      <div className="layout-consumer">
        {/* <OrganizationSideNav /> */}
        <div className="consumer-main">{this.props.children}</div>
      </div>
    );
  }
}

export { ConsumerLayout };
