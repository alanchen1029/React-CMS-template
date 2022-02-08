import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

// import { ManagerLoginTab, ManagerRegisterTab } from "./components";

interface TabPanelProps
{
  children: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps)
{
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <>{children}</>}
    </div>
  );
}

const Login = (): JSX.Element =>
{
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) =>
  {
    setValue(newValue);
  };
  return (
    <div className="panel login-panel">
      <div className="panel-tabs small-margin-bottom-50">
        <Tabs value={value} onChange={handleChange} aria-label="login tabs" className="login-tabs">
          <Tab label="Sign Up" />
          <Tab label="Log In" />
        </Tabs>
      </div>
      <TabPanel value={value} index={0}>
        {/* <ManagerRegisterTab /> */}
      </TabPanel>
      <TabPanel value={value} index={1}>
        {/* <LoginTab /> */}
      </TabPanel>
    </div>
  );
};

export { Login };
