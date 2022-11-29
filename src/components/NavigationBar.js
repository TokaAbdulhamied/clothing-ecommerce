import React from "react";
import { Outlet } from "react-router-dom";

function NavigationBar() {
  return (
    <div>
      NavigationBar
      <Outlet />
    </div>
  );
}

export default NavigationBar;
