import { useState } from "react";

interface Ep {
  picture: string;
  name: string;
  internship: string;
  term: string;
  phone: string;
}
const EPsTable = () => {
  const [eps, setEps] = useState<Ep[]>([
    {
      picture:
        "https://static.vecteezy.com/system/resources/previews/006/390/348/non_2x/simple-flat-isolated-people-icon-free-vector.jpg",
      name: "Zeynep",
      internship: "volunteering",
      term: "short",
      phone: "50620818",
    },
  ]);

  const [editIndex, setEditIndex] = useState<number | null>(null);
  const [editData, setEditData] = useState({
    picture: "",
    name: "",
    internship: "",
    term: "",
    phone: "",
  });

  const handleAdd = () => {
    setEps([...eps, { ...editData }]);
    setEditIndex(eps.length);
    setEditData({
      picture: "",
      name: "",
      internship: "",
      term: "",
      phone: "",
    });
  };

  const handleEdit = (index: number) => {
    setEditIndex(index);
    setEditData({ ...eps[index] });
  };

  const handleSave = () => {
    if (editIndex === null) return;
    const updated = [...eps];
    updated[editIndex] = editData;
    setEps(updated);
    setEditIndex(null);
  };

  const handleDelete = (index: number) => {
    const updated = eps.filter((_, i) => i !== index);
    setEps(updated);
    if (editIndex === index) setEditIndex(null);
  };

  return (
    <div className="mb-12">
      <h2 className="text-2xl font-bold text-indigo-800 mb-4">EPs</h2>
      <button
        onClick={handleAdd}
        className="bg-green-500 text-black px-4 py-2 rounded mb-4"
      >
        Add an EP
      </button>
      <div className="overflow-auto bg-white rounded-xl shadow">
        <table className="w-full text-left">
          <thead className="bg-indigo-300 text-indigo-900">
            <tr>
              <th className="p-3 text-black">Picture</th>
              <th className="p-3 text-black">Name</th>
              <th className="p-3 text-black">Internship</th>
              <th className="p-3 text-black">Term</th>
              <th className="p-3 text-black">Phone</th>
              <th className="p-3 text-black text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {eps.map((ep, index) => (
              <tr key={index} className="border-t border-gray-200">
                {editIndex === index ? (
                  <>
                    <td className="p-3 text-black flex flex-col items-center">
                      <input
                        value={editData.picture}
                        onChange={(e) =>
                          setEditData({ ...editData, picture: e.target.value })
                        }
                        className="w-full border rounded px-2 py-1"
                      />
                      
                    </td>
                    <td className="p-3 text-black">
                      <input
                        value={editData.name}
                        onChange={(e) =>
                          setEditData({ ...editData, name: e.target.value })
                        }
                        className="w-full border rounded px-2 py-1"
                      />
                    </td>
                    <td className="p-3 text-black">
                      <input
                        value={editData.internship}
                        onChange={(e) =>
                          setEditData({
                            ...editData,
                            internship: e.target.value,
                          })
                        }
                        className="w-full border rounded px-2 py-1"
                      />
                    </td>
                    <td className="p-3 text-black">
                      <input
                        value={editData.term}
                        onChange={(e) =>
                          setEditData({ ...editData, term: e.target.value })
                        }
                        className="w-full border rounded px-2 py-1"
                      />
                    </td>
                    <td className="p-3 text-black">
                      <input
                        type="tel"
                        value={editData.phone}
                        onChange={(e) =>
                          setEditData({ ...editData, phone: e.target.value })
                        }
                        className="w-full border rounded px-2 py-1"
                      />
                    </td>
                    <td className="p-3 text-black space-x-2 text-center">
                      <button
                        onClick={handleSave}
                        className="bg-blue-500 text-black px-3 py-1 rounded"
                      >
                        Save
                      </button>
                      <button
                        onClick={() => setEditIndex(null)}
                        className="bg-gray-400 text-black px-3 py-1 rounded"
                      >
                        Cancel
                      </button>
                    </td>
                  </>
                ) : (
                  <>
                    <td className="p-3 text-black">
                      <img
                        src={ep.picture}
                        alt="pic"
                        className="w-12 h-12 rounded-full"
                      />
                    </td>
                    <td className="p-3 text-black">{ep.name}</td>
                    <td className="p-3 text-black">{ep.internship}</td>
                    <td className="p-3 text-black">{ep.term}</td>
                    <td className="p-3 text-black">
                      <a
                        href={`tel:${ep.phone}`}
                        className="text-blue-600 underline"
                      >
                        {ep.phone}
                      </a>
                    </td>
                    <td className="p-3 text-black space-x-2 text-center">
                      <button
                        onClick={() => handleEdit(index)}
                        className="bg-yellow-400 text-black px-3 py-1 rounded"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(index)}
                        className="bg-red-500 text-black px-3 py-1 rounded"
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

export default EPsTable;
