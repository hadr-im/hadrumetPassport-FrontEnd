import { Contact } from "lucide-react";
import { useState } from "react";
interface Contact {
  picture: string;
  name: string;
  position: string;
  phone: string;
  fb: string;
}
const ContactsTable = () => {
  const [contacts, setContacts] = useState<Contact[]>([
    {
      picture:
        "https://static.vecteezy.com/system/resources/previews/006/390/348/non_2x/simple-flat-isolated-people-icon-free-vector.jpg",
      name: "Med Helmi Essouid",
      position: "LCVP IM",
      phone: "93034808",
      fb: "https://www.facebook.com/Med.Helmi.Souaied",
    },
    {
      picture:
        "https://static.vecteezy.com/system/resources/previews/006/390/348/non_2x/simple-flat-isolated-people-icon-free-vector.jpg",
      name: "Oussama Rachdi",
      position: "Manager IM",
      phone: "99578819",
      fb: "https://www.facebook.com/search/top?q=oussama%20rachdi",
    },
  ]);

  const [editIndex, setEditIndex] = useState<number | null>(null);
  const [editData, setEditData] = useState<Contact>({
    picture: "",
    name: "",
    position: "",
    phone: "",
    fb: "",
  });

  const handleAdd = () => {
    setContacts([...contacts, { ...editData }]);
    setEditIndex(contacts.length);
    setEditData({ picture: "", name: "", position: "", phone: "", fb: "" });
  };

  const handleEdit = (index: number) => {
    setEditIndex(index);
    setEditData({ ...contacts[index] });
  };

  const handleSave = () => {
    if (editIndex === null) return;
    const updated = [...contacts];
    updated[editIndex] = editData;
    setContacts(updated);
    setEditIndex(null);
  };

  const handleDelete = (index: number) => {
    const updated = contacts.filter((_, i) => i !== index);
    setContacts(updated);
    if (editIndex === index) setEditIndex(null);
  };

  return (
    <div className="mb-12">
      <h2 className="text-2xl font-bold text-indigo-800 mb-4">Contacts</h2>
      <button
        onClick={handleAdd}
        className="bg-green-500 text-black px-4 py-2 rounded mb-4"
      >
        Add a Contact
      </button>
      <div className="overflow-auto bg-white rounded-xl shadow">
        <table className="w-full text-left">
          <thead className="bg-indigo-300 text-indigo-900">
            <tr>
              <th className="p-3 text-black">Picture</th>
              <th className="p-3 text-black">Name</th>
              <th className="p-3 text-black">Position</th>
              <th className="p-3 text-black">Phone</th>
              <th className="p-3 text-black">Facebook</th>
              <th className="p-3 text-black text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((contact, index) => (
              <tr
                key={index}
                className="border-t border-gray-200 hover:bg-indigo-50 transition"
              >
                {editIndex === index ? (
                  <>
                    <td className="p-3 text-black">
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
                        value={editData.position}
                        onChange={(e) =>
                          setEditData({ ...editData, position: e.target.value })
                        }
                        className="w-full border rounded px-2 py-1"
                      />
                    </td>
                    <td className="p-3 text-black">
                      <input
                        value={editData.phone}
                        onChange={(e) =>
                          setEditData({ ...editData, phone: e.target.value })
                        }
                        className="w-full border rounded px-2 py-1"
                      />
                    </td>
                    <td className="p-3 text-black">
                      <input
                        value={editData.fb}
                        onChange={(e) =>
                          setEditData({ ...editData, fb: e.target.value })
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
                        src={contact.picture}
                        alt="pic"
                        className="w-12 h-12 rounded-full"
                      />
                    </td>
                    <td className="p-3 text-black">{contact.name}</td>
                    <td className="p-3 text-black">{contact.position}</td>
                    <td className="p-3 text-black">
                      <a
                        href={`tel:${contact.phone}`}
                        className="text-blue-600 underline"
                      >
                        {contact.phone}
                      </a>
                    </td>
                    <td className="p-3 text-black">
                      <a
                        href={contact.fb}
                        className="text-blue-600 underline"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Facebook
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

export default ContactsTable;
