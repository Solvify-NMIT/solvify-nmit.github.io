import { useState } from 'react';

const photos = [
  '/snaps/1.jpg',
  '/snaps/2.jpg',
  '/snaps/3.jpg',
  '/snaps/4.jpg',
  '/snaps/5.jpg',
  '/snaps/6.jpg',
  '/snaps/7.jpg',
  '/snaps/8.jpg',
  '/snaps/9.jpg',
];

export default function Snaps() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section className="bg-black text-white py-12 px-4">
      <h2 className="text-3xl font-bold text-center mb-8 text-[#ffd149]">Club Snaps</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {photos.map((src, idx) => (
          <div
            key={idx}
            className="relative group overflow-hidden rounded-xl shadow-md hover:shadow-yellow-400/30 transition-shadow duration-300 cursor-pointer"
            onClick={() => setSelectedImage(src)}
          >
            <img
              src={src}
              alt={`Snap ${idx + 1}`}
              className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-300"
            />
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50" onClick={() => setSelectedImage(null)}>
          <img
            src={selectedImage}
            alt="Selected Snap"
            className="max-w-[90%] max-h-[80%] rounded-lg shadow-lg border-4 border-[#ffd149]"
          />
        </div>
      )}
    </section>
  );
}