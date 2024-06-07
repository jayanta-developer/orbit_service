import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
//Components
import Auth from "./Pages/Auth";
import UserListView from "./Pages/UserListView";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Auth />} />
        <Route path="/user/list-view" element={<UserListView />} />
      </Routes>
    </>
  );
}
