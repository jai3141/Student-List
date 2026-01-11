import { createContext, useContext, useState } from "react";

const StudentContext = createContext();

export const StudentProvider = ({ children }) => {
  const [students, setStudents] = useState([
    { id: 1, name: "Arun", roll: "CS10001" },
    { id: 2, name: "Priya", roll: "CS10002" },
    { id: 3, name: "Kumar", roll: "CS10003" },
    { id: 4, name: "Divya", roll: "CS10004" }
  ]);

    
  const [favourites, setFavourites] = useState([]);

  // ✅ ADD STUDENT (with duplicate prevention)
  const addStudent = (student) => {
    const exists = students.find(
      s => s.roll.toLowerCase() === student.roll.toLowerCase()
    );

    if (exists) {
      return false; // duplicate
    }

    setStudents([...students, student]);
    return true;
  };

  // ✅ ADD TO FAVOURITE (THIS WAS MISSING ❗)
  const addFavourite = (student) => {
    if (!favourites.find(s => s.id === student.id)) {
      setFavourites([...favourites, student]);
    }
  };

  // ✅ REMOVE FAVOURITE
  const removeFavourite = (id) => {
    setFavourites(favourites.filter(s => s.id !== id));
  };

  return (
    <StudentContext.Provider
      value={{
        students,
        favourites,
        addStudent,
        addFavourite,
        removeFavourite
      }}
    >
      {children}
    </StudentContext.Provider>
  );
};

export const useStudent = () => useContext(StudentContext);
