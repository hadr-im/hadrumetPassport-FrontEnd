import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
// Import your new generic page components
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

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:categorySlug" element={<CategoryPage />} />
          <Route
            path="/:categorySlug/:elementSlug"
            element={<ElementDetailPage />}
          />
          <Route path="/eps" element={<Eps />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/my-profile" element={<MyProfile />} />
          <Route path="/emergency" element={<EmergencyContacts />} />
          <Route path="/local-apps" element={<LocalApps />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dep/im/admin" element={<AdminPanel/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
