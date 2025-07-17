import { useEffect, useState } from "react";

const API_URL = "http://localhost:3000/api/users";

interface Ep {
  id?: string;
  picture: string;
  name: string;
  email: string;
  phone: string;
  lc: string;
  mc: string;
  status: string;
  realized: boolean;
}

const EPsTable = () => {
  const [eps, setEps] = useState<Ep[]>([]);
  const [search, setSearch] = useState("");
  const [modalOpen, setModalOpen] = useState<null | number>(null);
  const [sending, setSending] = useState(false);
  const [feedback, setFeedback] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");
    fetch(API_URL, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        // Map backend fields to frontend fields
        const mapped = (data || []).map((item: any) => ({
          id: item.applicationId, // use applicationId as id
          picture: item.picture || "https://static.vecteezy.com/system/resources/previews/006/390/348/non_2x/simple-flat-isolated-people-icon-free-vector.jpg",
          name: item.fullName,
          email: item.email,
          phone: item.phone || "",
          lc: item.lc || "",
          mc: item.mc || "",
          status: item.status || "",
          realized: !!item.realized,
        }));
        setEps(mapped);
      })
      .catch((err) => {
        console.error("Failed to fetch users:", err);
      });
  }, []);

  const handleRealizedChange = async (index: number, value: boolean) => {
    const user = eps[index];
    const token = localStorage.getItem("token");
    const userId = user.id; // now applicationId
    try {
      const res = await fetch(`http://localhost:3000/api/users/${userId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ realized: value }),
      });
      if (!res.ok) throw new Error("Failed to update realized status");
      // Update state
      const updated = [...eps];
      updated[index].realized = value;
      setEps(updated);
    } catch (err) {
      alert("Failed to update realized status");
      console.error(err);
    }
  };

  const handleSendEmail = async (index: number) => {
    setSending(true);
    setFeedback("");
    const user = eps[index];
    const token = localStorage.getItem("token");
    try {
      const res = await fetch("http://localhost:3000/api/sendEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ applicationId: user.id }),
      });
      if (!res.ok) throw new Error("Failed to send email");
      setFeedback("Email sent successfully!");
    } catch (err) {
      setFeedback("Failed to send email");
      console.error(err);
    } finally {
      setSending(false);
      setTimeout(() => setFeedback(""), 2000);
      setModalOpen(null);
    }
  };

  const filteredEps = eps.filter(
    (ep) =>
      ep.name.toLowerCase().includes(search.toLowerCase()) ||
      ep.email.toLowerCase().includes(search.toLowerCase()) ||
      ep.phone.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="mb-12">
      <h2 className="text-2xl font-bold text-indigo-800 mb-4">All Users</h2>
      <input
        type="text"
        placeholder="Search by name, email, or phone..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="mb-4 border border-indigo-300 rounded px-3 py-2 w-full max-w-md"
      />
      {feedback && (
        <div className="mb-2 text-center text-green-600 font-semibold">{feedback}</div>
      )}
      <div className="overflow-auto bg-white rounded-xl shadow">
        <table className="w-full text-left">
          <thead className="bg-indigo-300 text-indigo-900">
            <tr>
              <th className="p-3 text-black">Picture</th>
              <th className="p-3 text-black">Name</th>
              <th className="p-3 text-black">Email</th>
              <th className="p-3 text-black">Phone</th>
              <th className="p-3 text-black">LC</th>
              <th className="p-3 text-black">MC</th>
              <th className="p-3 text-black">Status</th>
              <th className="p-3 text-black">Realized</th>
              <th className="p-3 text-black">Send Credentials</th>
            </tr>
          </thead>
          <tbody>
            {filteredEps.map((ep, index) => (
              <tr key={ep.id || ep.email} className="border-t border-gray-200">
                <td className="p-3 text-black">
                  <img
                    src={ep.picture}
                    alt="pic"
                    className="w-12 h-12 rounded-full"
                  />
                </td>
                <td className="p-3 text-black">{ep.name}</td>
                <td className="p-3 text-black">{ep.email}</td>
                <td className="p-3 text-black">{ep.phone}</td>
                <td className="p-3 text-black">{ep.lc}</td>
                <td className="p-3 text-black">{ep.mc}</td>
                <td className="p-3 text-black">{ep.status}</td>
                <td className="p-3 text-black text-center">
                  <input
                    type="checkbox"
                    checked={ep.realized}
                    onChange={e => handleRealizedChange(index, e.target.checked)}
                  />
                </td>
                <td className="p-3 text-black text-center">
                  <button
                    className="bg-blue-500 text-white px-3 py-1 rounded disabled:opacity-50"
                    disabled={sending}
                    onClick={() => setModalOpen(index)}
                  >
                    Send
                  </button>
                  {modalOpen === index && (
                    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-30">
                      <div className="bg-white p-6 rounded shadow-xl max-w-sm w-full">
                        <h3 className="text-lg font-bold mb-4">Send Credentials Email</h3>
                        <p className="mb-4">Are you sure you want to send the credentials email to <span className="font-semibold">{ep.name}</span>?</p>
                        <div className="flex justify-end space-x-2">
                          <button
                            className="bg-gray-300 px-4 py-2 rounded"
                            onClick={() => setModalOpen(null)}
                            disabled={sending}
                          >
                            Cancel
                          </button>
                          <button
                            className="bg-blue-600 text-white px-4 py-2 rounded"
                            onClick={() => handleSendEmail(index)}
                            disabled={sending}
                          >
                            {sending ? "Sending..." : "Send"}
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EPsTable;
