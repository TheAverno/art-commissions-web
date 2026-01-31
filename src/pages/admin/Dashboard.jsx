import { signOut } from "firebase/auth";
import { auth } from "../../app/firebase";
import { useNavigate } from "react-router-dom";

export default function AdminDashboard() {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate("/");
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  return (
    <div className="min-h-screen bg-white">

      {/* Top bar minimalista */}
      <header className="flex justify-between items-center px-8 py-6 border-b border-neutral-200">
        <h1 className="text-lg font-semibold tracking-tight">
          AliceHan096 Studio
        </h1>

        <button
          onClick={handleLogout}
          className="text-sm text-neutral-500 hover:text-neutral-900 transition"
        >
          Logout
        </button>
      </header>

      {/* Contenido */}
      <main className="p-8">
        <h2 className="text-2xl font-semibold mb-4">
          Dashboard
        </h2>

        <p className="text-neutral-600">
          Welcome back. From here you manage your artwork.
        </p>
      </main>

    </div>
  );
}
