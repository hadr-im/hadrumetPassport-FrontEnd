import  { useState } from "react";
interface Place{
    picture : string,
    name : string,
    description : string
}
const PlacesTable = () => {
  const [places, setPlaces] = useState<Place[]>([
    {
      picture: "data:image/jpeg;base64,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",
      name: "DaRemi",
      description: "Italian food restaurant",
    },
  ]);

  const [editIndex, setEditIndex] = useState<number | null>(null);
  const [editData, setEditData] = useState({ picture: "", name: "", description: "" });

  const handleAdd = () => {
    setPlaces([...places, { ...editData }]);
    setEditIndex(places.length);
    setEditData({ picture: "", name: "", description: "" });
  };

  const handleEdit = (index:number) => {
    setEditIndex(index);
    setEditData({ ...places[index] });
  };

  const handleSave = () => {
    if (editIndex === null) return;
    const updated = [...places];
    updated[editIndex] = editData;
    setPlaces(updated);
    setEditIndex(null);
  };

  const handleDelete = (index:number) => {
    const updated = places.filter((_, i) => i !== index);
    setPlaces(updated);
    if (editIndex === index) setEditIndex(null);
  };

  return (
    <div className="mb-12">
      <h2 className="text-2xl font-bold text-indigo-800 mb-4">Places</h2>
      <button
        onClick={handleAdd}
        className="bg-green-400 text-black px-4 py-2 rounded mb-4"
      >
        Add Place
      </button>
      <div className="overflow-auto bg-white rounded-xl shadow">
        <table className="w-full text-left">
          <thead className="bg-indigo-300 text-indigo-900">
            <tr>
              <th className="p-3 text-black">Picture</th>
              <th className="p-3 text-black">Name</th>
              <th className="p-3 text-black">Description</th>
              <th className="p-3 text-black text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {places.map((place, index) => (
              <tr key={index} className="border-t border-gray-200">
                {editIndex === index ? (
                  <>
                    <td className="p-3 text-black">
                      <input
                        value={editData.picture}
                        onChange={(e) => setEditData({ ...editData, picture: e.target.value })}
                        className="w-full border rounded px-2 py-1"
                        placeholder="URL image"
                      />
                    </td>
                    <td className="p-3 text-black">
                      <input
                        value={editData.name}
                        onChange={(e) => setEditData({ ...editData, name: e.target.value })}
                        className="w-full border rounded px-2 py-1"
                      />
                    </td>
                    <td className="p-3 text-black">
                      <input
                        value={editData.description}
                        onChange={(e) => setEditData({ ...editData, description: e.target.value })}
                        className="w-full border rounded px-2 py-1"
                      />
                    </td>
                    <td className="p-3 text-black space-x-2 text-center">
                      <button
                        onClick={handleSave}
                        className="bg-blue-400 text-black px-3 py-1 rounded"
                      >
                        Save
                      </button>
                      <button
                        onClick={() => setEditIndex(null)}
                        className="bg-gray-300 text-black px-3 py-1 rounded"
                      >
                        Cancel
                      </button>
                    </td>
                  </>
                ) : (
                  <>
                    <td className="p-3 text-black">
                      {place.picture && (
                        <img src={place.picture} alt={place.name} className="w-12 h-12 rounded" />
                      )}
                    </td>
                    <td className="p-3 text-black">{place.name}</td>
                    <td className="p-3 text-black">{place.description}</td>
                    <td className="p-3 text-black space-x-2 text-center">
                      <button
                        onClick={() => handleEdit(index)}
                        className="bg-yellow-300 text-black px-3 py-1 rounded"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(index)}
                        className="bg-red-400 text-black px-3 py-1 rounded"
                      >
                        Delete
                      </button>
                    </td>
                  </>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PlacesTable;