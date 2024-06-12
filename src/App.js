import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
//Components
import Auth from "./Pages/Auth";
import UserListView from "./Pages/UserListView";
import AdminListView from "./Pages/AdminListView";
import AdminApprove from "./Pages/AdminApprove";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Auth />} />
        <Route path="/user/list-view" element={<UserListView />} />
        <Route path="/admin/list-view" element={<AdminListView />} />
        <Route path="/admin/approve" element={<AdminApprove />} />
      </Routes>
    </>
  );
}
