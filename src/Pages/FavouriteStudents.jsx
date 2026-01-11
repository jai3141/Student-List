import { useStudent } from "../context/StudentContext";

const FavouriteStudents = () => {
  const { favourites, removeFavourite } = useStudent();

  if (favourites.length === 0) {
    return (
      <p className="text-center text-gray-500 text-lg mt-10">
        No favourite students added yet ⭐
      </p>
    );
  }

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">
        Favourite Students ({favourites.length})
      </h1>

      <div className="space-y-4">
        {favourites.map((student) => (
          <div
            key={student.id}
            className="border rounded-lg p-4 flex justify-between items-center shadow-sm"
          >
            <div>
              <p className="font-semibold">{student.name}</p>
              <p className="text-sm text-gray-500">
                Roll No: {student.roll}
              </p>
            </div>

            <button
              onClick={() => removeFavourite(student.id)}
              className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
            >
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FavouriteStudents;
