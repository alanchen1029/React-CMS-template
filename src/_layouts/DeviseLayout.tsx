import React from "react";

class DeviseLayout extends React.Component
{
  render(): JSX.Element
  {
    return (
      <div className="layout-devise">
        <div className="grid-x">
          <div className="cell large-6 show-for-large devise-left">
            <div className="logo-area">
              Logo
            </div>
          </div>
          <div className="cell large-6 devise-right">
            <div className="devise-main">{this.props.children}</div>
          </div>
        </div>
      </div>
    );
  }
}

export { DeviseLayout };
