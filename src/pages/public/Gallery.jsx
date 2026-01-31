import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";

export default function Gallery() {
  const images = [
    "/src/assets/gallery/Sirio.jpg",
    "/src/assets/gallery/comision1.jpg",
    "/src/assets/gallery/comision2.jpg",
    "/src/assets/gallery/comision3.jpg",
    "/src/assets/gallery/Comision-Theo.jpg",
    "/src/assets/gallery/Draco-Theo-Lav.jpg",
  ];

  return (
    <div className="bg-white text-neutral-900 min-h-screen">
      <Navbar />

      <section className="max-w-6xl mx-auto px-6 py-20">

        <h1 className="text-4xl font-semibold mb-12 tracking-tight">
          Selected Work
        </h1>

        <div className="grid md:grid-cols-2 gap-6">

          {images.map((img, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-2xl group cursor-pointer"
            >
              <img
                src={img}
                alt="Artwork"
                className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
              />
            </div>
          ))}

        </div>
      </section>

      <Footer />
    </div>
  );
}
