import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";

export default function Contact() {
  return (
    <div className="bg-white text-neutral-900 min-h-screen">
      <Navbar />

      <section className="max-w-xl mx-auto px-6 py-24">

        <h1 className="text-4xl font-semibold mb-6 tracking-tight">
          Request a Commission
        </h1>

        <p className="text-neutral-600 mb-10">
          Fill the details below and send your request directly via email.
        </p>

        <a
          href="mailto:correo@ejemplo.com?subject=Commission%20Request"
          className="inline-block bg-neutral-900 text-white px-8 py-4 rounded-xl hover:opacity-80 transition"
        >
          Send Email
        </a>

      </section>

      <Footer />
    </div>
  );
}
