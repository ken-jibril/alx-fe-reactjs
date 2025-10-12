import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import PostsComponent from './PostsComponent';

function Home() {
  return (
    <div style={{ padding: 20 }}>
      <h1>Home</h1>
      <p>Welcome — navigate to Posts to see React Query in action.</p>
      <Link to="/posts">Go to Posts</Link>
    </div>
  );
}

export default function App() {
  return (
    <div style={{ fontFamily: 'system-ui, Arial', padding: 12 }}>
      <nav style={{ display: 'flex', gap: 12, marginBottom: 20 }}>
        <Link to="/">Home</Link>
        <Link to="/posts">Posts</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/posts" element={<PostsComponent />} />
      </Routes>
    </div>
  );
}
