import React from "react";
import Sidebar from "../../components/sidebar/profileMenu";
import { Outlet } from "react-router-dom";

export default function userProfile() {
  return (
    <div className="flex flex-row">
      <Sidebar />
      <Outlet />
    </div>
  );
}
