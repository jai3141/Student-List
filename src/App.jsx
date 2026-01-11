import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import StudentList from "./Pages/StudentList";
import FavouriteStudents from "./Pages/FavouriteStudents";

function App() {
  return (
    <BrowserRouter>
      <nav className="bg-indigo-600 px-6 py-4 flex gap-6 text-white">
        <NavLink
          to="/"
          className="font-semibold hover:underline"
        >
          Students
        </NavLink>

        <NavLink
          to="/favourites"
          className="font-semibold hover:underline"
        >
          Favourites
        </NavLink>
      </nav>

      <div className="p-6">
        <Routes>
          <Route path="/" element={<StudentList />} />
          <Route path="/favourites" element={<FavouriteStudents />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
