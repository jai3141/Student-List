import { useState } from "react";
import { useStudent } from "../context/StudentContext";

const StudentList = () => {
    const { students, favourites, addStudent, addFavourite } = useStudent();

    const [name, setName] = useState("");
    const [roll, setRoll] = useState("");
    const [error, setError] = useState("");

    const handleAddStudent = () => {
        if (!name || !roll) {
            setError("Name and Roll No are required");
            return;
        }

        const newStudent = {
            id: Date.now(),
            name,
            roll
        };

        const success = addStudent(newStudent);

        if (!success) {
            setError("Student with this Roll No already exists");
            return;
        }

        // success
        setError("");
        setName("");
        setRoll("");
    };


    return (
        <div>
            <h1 className="text-2xl font-bold mb-4">All Students</h1>

            {/* ➕ Add Student Form */}
            <div className="flex gap-3 mb-6">
                <input
                    type="text"
                    placeholder="Student Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="border px-3 py-2 rounded w-1/3"
                />

                <input
                    type="text"
                    placeholder="Roll No"
                    value={roll}
                    onChange={(e) => setRoll(e.target.value)}
                    className="border px-3 py-2 rounded w-1/3"
                />

                <button
                    onClick={handleAddStudent}
                    className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                >
                    Add Student
                </button>
                {error && (
  <p className="text-red-500 mb-4 font-medium">
    {error}
  </p>
)}

            </div>

            {/* 📋 Student Cards */}
            <div className="grid gap-4 md:grid-cols-2">
                {students.map((student) => {
                    const isFav = favourites.some(f => f.id === student.id);

                    return (
                        <div
                            key={student.id}
                            className="border rounded-lg p-4 flex justify-between items-center"
                        >
                            <div>
                                <p className="font-semibold">{student.name}</p>
                                <p className="text-sm text-gray-500">
                                    Roll No: {student.roll}
                                </p>
                            </div>

                            <button
                                onClick={() => addFavourite(student)}
                                disabled={isFav}
                                className={`px-4 py-2 rounded text-white
                  ${isFav
                                        ? "bg-gray-400 cursor-not-allowed"
                                        : "bg-green-500 hover:bg-green-600"
                                    }`}
                            >
                                {isFav ? "Added" : "Add to Favourite"}
                                
                            </button>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default StudentList;
