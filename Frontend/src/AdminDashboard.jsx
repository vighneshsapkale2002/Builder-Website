import React, { useEffect, useState } from "react";

const AdminDashboard = () => {
  const [enquiries, setEnquiries] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEnquiries = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/enquiries");
        const data = await response.json();
        setEnquiries(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching enquiries:", error);
        setLoading(false);
      }
    };

    fetchEnquiries();
  }, []);

  return (
    <section className="min-h-screen bg-gray-50 dark:bg-gray-900 p-6 text-gray-900 dark:text-white transition-colors">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-center">
          📋 Enquiry Dashboard
        </h2>

        {loading ? (
          <p className="text-center">Loading enquiries...</p>
        ) : enquiries.length === 0 ? (
          <p className="text-center">No enquiries yet.</p>
        ) : (
          <div className="overflow-x-auto bg-white dark:bg-gray-800 shadow-lg rounded-xl">
            <table className="w-full border-collapse">
              <thead className="bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-100">
                <tr>
                  <th className="p-3 border">Name</th>
                  <th className="p-3 border">Email</th>
                  <th className="p-3 border">Phone</th>
                  <th className="p-3 border">Project</th>
                  <th className="p-3 border">Message</th>
                  <th className="p-3 border">Date</th>
                </tr>
              </thead>
              <tbody>
                {enquiries.map((enquiry) => (
                  <tr
                    key={enquiry._id}
                    className="text-center border-t hover:bg-gray-100 dark:hover:bg-gray-700 transition"
                  >
                    <td className="p-3">{enquiry.name}</td>
                    <td className="p-3">{enquiry.email}</td>
                    <td className="p-3">{enquiry.phone}</td>
                    <td className="p-3">{enquiry.project}</td>
                    <td className="p-3">{enquiry.message || "—"}</td>
                    <td className="p-3">
                      {new Date(enquiry.createdAt).toLocaleString()}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </section>
  );
};

export default AdminDashboard;











// // AdminDashboard.jsx
// import React, { useEffect, useState } from "react";
// import axios from "axios";

// export default function AdminDashboard() {
//   const [records, setRecords] = useState([]);

//   useEffect(() => {
//     const fetchRecords = async () => {
//       try {
//         const token = localStorage.getItem("token");
//         const res = await axios.get("http://localhost:5000/api/enquiries", {
//           headers: { Authorization: `Bearer ${token}` },
//         });
//         setRecords(res.data);
//       } catch (err) {
//         console.log(err);
//       }
//     };
//     fetchRecords();
//   }, []);

//   return (
//     <div className="p-10">
//       <h1 className="text-2xl font-bold mb-5">All Records</h1>
//       <table className="w-full border">
//         <thead>
//           <tr className="bg-gray-200">
//             <th className="p-2 border">Name</th>
//             <th className="p-2 border">Email</th>
//             <th className="p-2 border">Message</th>
//           </tr>
//         </thead>
//         <tbody>
//           {records.map((rec) => (
//             <tr key={rec._id}>
//               <td className="border p-2">{rec.name}</td>
//               <td className="border p-2">{rec.email}</td>
//               <td className="border p-2">{rec.message}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }
