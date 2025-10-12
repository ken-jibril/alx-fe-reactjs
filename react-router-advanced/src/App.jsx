import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Profile from './pages/Profile';
import ProfileDetails from './pages/ProfileDetails';
import ProfileSettings from './pages/ProfileSettings';
import User from './pages/User';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  // 🧠 fake login state
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = () => setIsAuthenticated(true);
  const logout = () => setIsAuthenticated(false);

  return (
    <Router>
      <div style={{ padding: 20 }}>
        <h1>Advanced React Router Demo 🧭</h1>

        <nav style={{ marginBottom: 20 }}>
          <Link to="/" style={{ marginRight: 10 }}>Home</Link>
          <Link to="/profile" style={{ marginRight: 10 }}>Profile</Link>
          <Link to="/user/42">User 42</Link>
        </nav>

        {/* Auth Buttons */}
        <div style={{ marginBottom: 20 }}>
          {isAuthenticated ? (
            <button onClick={logout}>Logout</button>
          ) : (
            <button onClick={login}>Login</button>
          )}
        </div>

        <Routes>
          <Route path="/" element={<Home />} />

          {/* ✅ Protected Route */}
          <Route
            path="/profile/*"
            element={
              <ProtectedRoute isAuthenticated={isAuthenticated}>
                <Profile />
              </ProtectedRoute>
            }
          />

          {/* ✅ Dynamic Route */}
          <Route path="/user/:id" element={<User />} />

          {/* 404 fallback */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
