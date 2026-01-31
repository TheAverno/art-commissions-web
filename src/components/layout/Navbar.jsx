import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="w-full border-b border-neutral-200 bg-white/80 backdrop-blur-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">

        <Link
          to="/"
          className="text-2xl font-medium tracking-[-0.02em]"
        >
          AliceHan096
        </Link>

        <div className="flex gap-8 text-sm font-medium">
          <Link to="/gallery" className="hover:opacity-60 transition">
            Gallery
          </Link>

          <Link to="/contact" className="hover:opacity-60 transition">
            Contact
          </Link>
        </div>

      </div>
    </nav>
  );
}
