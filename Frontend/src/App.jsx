// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import ProjectsPage from "./ProjectsPage";
// import ProjectDetails from "./ProjectDetails";

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<ProjectsPage />} />
//         <Route path="/projects/:id" element={<ProjectDetails />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;



import AdminDashboard from "./AdminDashboard";

function App() {
  return (
    <div>
      <AdminDashboard />
    </div>
  );
}

export default App;





// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Signup from "./Signup";
// import Login from "./Login";

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/signup" element={<Signup />} />
//         <Route path="/login" element={<Login />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;






// // App.jsx
// import React, { useState } from "react";
// import AdminLogin from "./AdminLogin";
// import AdminDashboard from "./AdminDashboard";

// function App() {
//   const [auth, setAuth] = useState(!!localStorage.getItem("token"));

//   return <div>{auth ? <AdminDashboard /> : <AdminLogin setAuth={setAuth} />}</div>;
// }

// export default App;
