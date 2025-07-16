import { useState } from "react";

interface Event {
    picture: string;
    name: string;
    startDate: string;
    endDate: string;
    startTime: string;
    description: string;
}
const EventsTable = () => {
  const [events, setEvents] = useState<Event[]>([
    {
      picture: "data:image/jpeg;base64,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",
      name: "Cap Serrat",
      startDate: "13/07/2025",
      endDate: "13/07/2025",
      startTime: "06:00",
      description: " trip to  Cap Serrat",
    },
  ]);

  const [editIndex, setEditIndex] = useState<number | null>(null);
  const [editData, setEditData] = useState({
    picture: "",
    name: "",
    startDate: "",
    endDate: "",
    startTime: "",
    description: "",
  });

  const handleAdd = () => {
    setEvents([...events, { ...editData }]);
    setEditIndex(events.length);
    setEditData({
      picture: "",
      name: "",
      startDate: "",
      endDate: "",
      startTime: "",
      description: "",
    });
  };

  const handleEdit = (index: number) => {
    setEditIndex(index);
    setEditData({ ...events[index] });
  };

  const handleSave = () => {
    if (editIndex === null) return;
    const updated = [...events];
    updated[editIndex] = editData;
    setEvents(updated);
    setEditIndex(null);
  };

  const handleDelete = (index: number) => {
    const updated = events.filter((_, i) => i !== index);
    setEvents(updated);
    if (editIndex === index) setEditIndex(null);
  };

  return (
    <div className="mb-12">
      <h2 className="text-2xl font-bold text-indigo-800 mb-4">Events</h2>
      <button
        onClick={handleAdd}
        className="bg-green-400 text-black px-4 py-2 rounded mb-4"
      >
        Add Event
      </button>
      <div className="overflow-auto bg-white rounded-xl shadow">
        <table className="w-full text-left">
          <thead className="bg-indigo-300 text-indigo-900">
            <tr>
              <th className="p-3 text-black">Picture</th>
              <th className="p-3 text-black">Name</th>
              <th className="p-3 text-black">Start Date</th>
              <th className="p-3 text-black">End Date</th>
              <th className="p-3 text-black">Start Time</th>
              <th className="p-3 text-black">Description</th>
              <th className="p-3 text-black text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {events.map((event, index) => (
              <tr key={index} className="border-t border-gray-200">
                {editIndex === index ? (
                  <>
                    <td className="p-3 text-black">
                      <input
                        type="text"
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
                        type="date"
                        value={editData.startDate}
                        onChange={(e) => setEditData({ ...editData, startDate: e.target.value })}
                        className="w-full border rounded px-2 py-1"
                      />
                    </td>
                    <td className="p-3 text-black">
                      <input
                        type="date"
                        value={editData.endDate}
                        onChange={(e) => setEditData({ ...editData, endDate: e.target.value })}
                        className="w-full border rounded px-2 py-1"
                      />
                    </td>
                    <td className="p-3 text-black">
                      <input
                        type="time"
                        value={editData.startTime}
                        onChange={(e) => setEditData({ ...editData, startTime: e.target.value })}
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
                      {event.picture && (
                        <img src={event.picture} alt={event.name} className="w-12 h-12 rounded" />
                      )}
                    </td>
                    <td className="p-3 text-black">{event.name}</td>
                    <td className="p-3 text-black">{event.startDate}</td>
                    <td className="p-3 text-black">{event.endDate}</td>
                    <td className="p-3 text-black">{event.startTime}</td>
                    <td className="p-3 text-black">{event.description}</td>
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

export default EventsTable;