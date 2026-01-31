import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="bg-white text-neutral-900 min-h-screen">

      <Navbar />

      {/* HERO */}
      <section className="max-w-6xl mx-auto px-6 py-24">

        <h1 className="text-5xl md:text-7xl font-semibold tracking-tight mb-6">
          Commissions Open
        </h1>

        <p className="text-neutral-600 max-w-xl text-lg mb-8">
          Digital illustrations focused on character design, expressive portraits,
          and detailed artwork.
        </p>

        <Link
          to="/contact"
          className="inline-block bg-black text-white px-6 py-3 rounded-xl hover:opacity-80 transition"
        >
          Request a commission
        </Link>

      </section>


      {/* PREVIEW GALLERY */}
      <section className="max-w-6xl mx-auto px-6">

        <div className="grid md:grid-cols-3 gap-6">

          {/* usa imágenes locales por ahora */}
          <div className="aspect-square bg-neutral-200 rounded-2xl"></div>
          <div className="aspect-square bg-neutral-200 rounded-2xl"></div>
          <div className="aspect-square bg-neutral-200 rounded-2xl"></div>

        </div>

        <div className="mt-10">
          <Link
            to="/gallery"
            className="text-sm underline hover:opacity-60"
          >
            View full gallery →
          </Link>
        </div>

      </section>


      {/* CTA */}
      <section className="max-w-6xl mx-auto px-6 py-24 text-center">

        <h2 className="text-3xl font-semibold mb-4">
          Ready to bring your character to life?
        </h2>

        <Link
          to="/contact"
          className="inline-block bg-black text-white px-8 py-4 rounded-xl hover:opacity-80 transition"
        >
          Contact me
        </Link>

      </section>

      <Footer />

    </div>
  );
}
