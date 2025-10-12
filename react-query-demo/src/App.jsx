import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import PostsComponent from './PostsComponent';

function App() {
  return (
    <Router>
      <div style={{ padding: 20 }}>
        <h1>React Query Demo </h1>
        <nav>
          <Link to="/" style={{ marginRight: 10 }}>Home</Link>
          <Link to="/posts">Posts</Link>
        </nav>

        <Routes>
          <Route path="/" element={<h2>Welcome! Click “Posts” to fetch data.</h2>} />
          <Route path="/posts" element={<PostsComponent />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
