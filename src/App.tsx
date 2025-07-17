import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import CategoryPage from "./pages/CategoryPage";
import ElementDetailPage from "./pages/ElementDetailPage";
import Eps from "./pages/Eps";
import Contacts from "./pages/Contacts";
import AboutUs from "./pages/AboutUs";
import MyProfile from "./pages/MyProfile";
import EmergencyContacts from "./pages/EmergencyContacts";
import LocalApps from "./pages/LocalApps";
import Login from "./pages/Login";
import AdminPanel from "./pages/Admin/AdminPanel";
import Events from "./pages/Events";
import AdminLogin from "./pages/AdminLogin";
import RequireAdminAuth from "./components/RequireAdminAuth";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          {/* --- 1. MOST SPECIFIC STATIC ROUTES --- */}
          {/* List all your well-defined pages first. */}
          <Route path="/" element={<Home />} />
          <Route path="/eps" element={<Eps />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/my-profile" element={<MyProfile />} />
          <Route path="/emergency" element={<EmergencyContacts />} />
          <Route path="/local-apps" element={<LocalApps />} />
          <Route path="/login" element={<Login />} />
          <Route path="/admin-login" element={<AdminLogin />} />
          <Route path="/dep/im/admin" element={
            <RequireAdminAuth>
              <AdminPanel />
            </RequireAdminAuth>
          } />
          <Route path="/events" element={<Events />} />
          <Route path="/events/:eventSlug" element={<Events />} />

          <Route path="/:categorySlug" element={<CategoryPage />} />
          <Route
            path="/:categorySlug/:elementSlug"
            element={<ElementDetailPage />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
