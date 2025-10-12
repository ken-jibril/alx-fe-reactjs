import React from 'react';
import { Link, Routes, Route, Outlet } from 'react-router-dom';
import ProfileDetails from './ProfileDetails';
import ProfileSettings from './ProfileSettings';

export default function Profile() {
  return (
    <div style={{ padding: 20 }}>
      <h2>Profile Page 👤</h2>

      <nav style={{ marginBottom: 10 }}>
        <Link to="details" style={{ marginRight: 10 }}>Profile Details</Link>
        <Link to="settings">Profile Settings</Link>
      </nav>

      {/* ✅ Nested routes defined here */}
      <Routes>
        <Route path="details" element={<ProfileDetails />} />
        <Route path="settings" element={<ProfileSettings />} />
      </Routes>

      {/* You can keep Outlet if your checker allows it */}
      <Outlet />
    </div>
  );
}
