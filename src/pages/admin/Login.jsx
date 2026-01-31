import { useState } from "react";
import { auth } from "../../app/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/studio");
    } catch {
      setError("Invalid email or password");
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white">

      <form
        onSubmit={handleLogin}
        className="w-full max-w-sm p-10 border border-neutral-200 rounded-2xl shadow-sm"
      >

        <h1 className="text-2xl font-semibold tracking-tight mb-2">
          Studio Access
        </h1>

        <p className="text-sm text-neutral-500 mb-8">
          Private portal
        </p>

        <div className="flex flex-col gap-4">

          <input
            type="email"
            placeholder="Email"
            required
            className="border border-neutral-300 rounded-lg px-4 py-3 
                       focus:outline-none focus:ring-2 focus:ring-neutral-900"
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            required
            className="border border-neutral-300 rounded-lg px-4 py-3 
                       focus:outline-none focus:ring-2 focus:ring-neutral-900"
            onChange={(e) => setPassword(e.target.value)}
          />

          {error && (
            <p className="text-sm text-red-500">{error}</p>
          )}

          <button
            disabled={loading}
            className="bg-neutral-900 text-white py-3 rounded-lg mt-2 
                       hover:opacity-80 transition disabled:opacity-40"
          >
            {loading ? "Entering..." : "Enter Studio"}
          </button>

        </div>

      </form>
    </div>
  );
}
