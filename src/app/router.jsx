import { BrowserRouter, Routes, Route } from "react-router-dom";

import PublicRoute from "../components/PublicRoute";
import ProtectedRoute from "../components/protectedRoute";

import Home from "../pages/public/Home";
import Gallery from "../pages/public/Gallery";
import Contact from "../pages/public/Contact";

import Login from "../pages/admin/Login";
import Dashboard from "../pages/admin/Dashboard";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>

        {/* ---------- PUBLIC ROUTES ---------- */}
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />

        {/* ---------- AUTH ---------- */}
        <Route
          path="/studio"
          element={
            <PublicRoute>
              <Login />
            </PublicRoute>
          }
        />

        {/* ---------- ADMIN ---------- */}
        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />

        {/* ---------- 404 ---------- */}
        <Route path="*" element={<h1>404 Not Found</h1>} />

      </Routes>
    </BrowserRouter>
  );
}
