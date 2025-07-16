/* eslint-disable @typescript-eslint/no-unused-vars */
import  { useState } from "react";

import yassir from "../../assets/images/local_apps/yassir.png";
import kool from "../../assets/images/local_apps/kool.png";

interface App {
  label: string;
  icon: string;
  android: string;
  ios: string;
}

const APPsTable = () => {
  const [apps, setApps] = useState<App[]>([
    {
      label: "Yassir",
      icon: yassir,
      android: "https://play.google.com/store/apps/details?id=com.yatechnologies.yassir_rider",
      ios: "https://apps.apple.com/tn/app/yassir/id1239926325",
    },
    {
      label: "Kool",
      icon: kool,
      android: "https://play.google.com/store/apps/details?id=com.mohamedhadiji.kool",
      ios: "https://apps.apple.com/us/app/kool-delivery/id1545409489",
    },
  ]);

  const [editIndex, setEditIndex] = useState<number | null>(null);
  const [editData, setEditData] = useState<App>({ 
    label: "", 
    android: "", 
    ios: "", 
    icon: "" 
  });

  const handleEdit = (index: number) => {
    setEditIndex(index);
    setEditData({ ...apps[index] });
  };

  const handleSave = () => {
    if (editIndex === null) return;
    
    const updatedApps = [...apps];
    updatedApps[editIndex] = editData;
    setApps(updatedApps);
    setEditIndex(null);
  };

  const handleCancel = () => {
    setEditIndex(null);
  };

  const handleAdd = () => {
    setApps([
      ...apps,
      { label: "", icon: "", android: "", ios: "" },
    ]);
    setEditIndex(apps.length);
    setEditData({ label: "", icon: "", android: "", ios: "" });
  };

  const handleDelete = (index: number) => {
    const updatedApps = apps.filter((_, i) => i !== index);
    setApps(updatedApps);
    if (editIndex === index) setEditIndex(null);
  };

  const buttonClass =
    "bg-purple-400 hover:bg-purple-500 text-black px-4 py-1 rounded-lg shadow";

  return (
    <div className="mb-12">
      <div className="mb-4">
        <h2 className="text-2xl font-bold text-indigo-800 mb-4">Local Apps</h2>
        <button
          onClick={handleAdd}
          className="bg-green-500 text-black px-4 py-2 rounded mb-4"
        >
          Add an App
        </button>
      </div>
      <div className="overflow-auto bg-white rounded-xl shadow">
        <table className="w-full text-left">
          <thead className="bg-indigo-300 text-indigo-900">
            <tr>
              <th className="p-4 text-black">App</th>
              <th className="p-4 text-black">Image</th>
              <th className="p-4 text-black">Link Android</th>
              <th className="p-4 text-black">Link iOS</th>
              <th className="p-4 text-black text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {apps.map((app, index) => (
              <tr
                key={index}
                className="border-t border-gray-200 hover:bg-indigo-50 transition"
              >
                {editIndex === index ? (
                  <>
                    <td className="p-4 text-black">
                      <input
                        value={editData.label}
                        onChange={(e) =>
                          setEditData({ ...editData, label: e.target.value })
                        }
                        className="border border-indigo-300 rounded px-2 py-1 w-full focus:outline-none focus:ring"
                      />
                    </td>
                    <td className="p-4 text-black">
                      {editData.icon && (
                        <img
                          src={editData.icon}
                          alt="icon"
                          className="w-16 h-16 object-contain mb-2 rounded"
                        />
                      )}
                      <input
                        value={editData.icon}
                        onChange={(e) =>
                          setEditData({ ...editData, icon: e.target.value })
                        }
                        className="border border-indigo-300 rounded px-2 py-1 w-full"
                        placeholder="URL de l'image ou chemin importé"
                      />
                    </td>
                    <td className="p-4 text-black">
                      <input
                        value={editData.android}
                        onChange={(e) =>
                          setEditData({ ...editData, android: e.target.value })
                        }
                        className="border border-indigo-300 rounded px-2 py-1 w-full"
                      />
                    </td>
                    <td className="p-4 text-black">
                      <input
                        value={editData.ios}
                        onChange={(e) =>
                          setEditData({ ...editData, ios: e.target.value })
                        }
                        className="border border-indigo-300 rounded px-2 py-1 w-full"
                      />
                    </td>
                    <td className="p-4 text-black text-center space-x-2">
                      <button onClick={handleSave} className={buttonClass}>
                        Save
                      </button>
                      <button onClick={handleCancel} className={buttonClass}>
                        Cancel
                      </button>
                    </td>
                  </>
                ) : (
                  <>
                    <td className="p-4 text-black font-semibold text-gray-800">
                      {app.label}
                    </td>
                    <td className="p-4 text-black">
                      <img
                        src={app.icon}
                        alt={app.label}
                        className="w-16 h-16 object-contain rounded shadow"
                      />
                    </td>
                    <td className="p-4 text-black">
                      <a
                        href={app.android}
                        className="text-blue-600 underline hover:text-blue-800"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Android
                      </a>
                    </td>
                    <td className="p-4 text-black">
                      {app.ios ? (
                        <a
                          href={app.ios}
                          className="text-blue-600 underline hover:text-blue-800"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          iOS
                        </a>
                      ) : (
                        <span className="italic text-gray-400">No Link</span>
                      )}
                    </td>
                    <td className="p-4 text-black text-center space-x-2">
                      <button
                        onClick={() => handleEdit(index)}
                        className={buttonClass}
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(index)}
                        className={buttonClass}
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

export default APPsTable;