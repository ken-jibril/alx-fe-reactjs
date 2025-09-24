// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Search from "./components/Search";
import UserCard from "./components/UserCard";

export default function App() {
  return (
    <Router>
      <div className="shadow-lg max-w-1/3 mx-auto my-5 rounded-lg hover:shadow-2xl">
        <h1 className="text-4xl font-bold text-center text-green-500 my-4 sm:text-xl md:text-4xl hover:text-green-700">GitHub Users Search</h1>
          <Search />
      </div>
      <h1 className="text-4xl font-bold text-green-600 text-center ">
           The API is working.
      </h1>
      <Routes>
        <Route path="/user/:username" element={<UserCard />} />
      </Routes>
    </Router>
  );
}