import { useState } from 'react';

function ProjectCard({
  title,
  description,
  date,
  tags,
  images,
  liveUrl,
  sourceUrl,
}) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <>
      <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl overflow-hidden shadow-2xl border-2 border-solid border-white w-[70vw] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
          {/* Image Section - Left Side */}
          <div
            className="relative w-[30vw] lg:h-full bg-black cursor-pointer p-5"
            onClick={openModal}
          >
            <img
              src={images[currentImageIndex]}
              alt={title}
              className="w-full h-full rounded-sm object-scale-down"
            />

            <div className="absolute top-6 left-6 flex gap-3">
              <span className="bg-gray-900 bg-opacity-80 backdrop-blur-sm text-white text-sm px-4 py-2 rounded-lg font-medium">
                {date}
              </span>
              <button className="bg-gray-900 bg-opacity-80 backdrop-blur-sm text-white text-sm px-4 py-2 rounded-lg flex items-center gap-2 font-medium">
                Gallery
              </button>
            </div>

            {/* Slide indicators */}
            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-2">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={(e) => {
                    e.stopPropagation();
                    setCurrentImageIndex(index);
                  }}
                  className={`h-1.5 rounded-full transition-all ${
                    index === currentImageIndex
                      ? 'bg-white w-12'
                      : 'bg-gray-400 w-8'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Content Section - Right Side */}
          <div className="py-8 lg:py-12 flex flex-col justify-center">
            {/* Tags */}
            <div className="flex flex-wrap gap-3 mb-6">
              {tags.map((tag, index) => (
                <span
                  key={index}
                  className="bg-gray-800 text-gray-300 text-sm px-4 py-2 rounded-lg font-medium border border-gray-700"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Title */}
            <h2 className="text-xl lg:text-2xl font-bold text-white mb-6 leading-tight text-left">
              {title}
            </h2>

            {/* Description */}
            <p className="text-gray-400 text-lg mb-8 leading-relaxed text-left">
              {description}
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4">
              {liveUrl && (
                <a
                  href={liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-3 rounded-lg flex items-center gap-2 font-semibold shadow-lg transition-all"
                >
                  📱 Live Demo
                </a>
              )}
              {sourceUrl && (
                <a
                  href={sourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 hover:bg-gray-700 text-white px-8 py-3 rounded-lg flex items-center gap-2 font-semibold border border-gray-700 transition-all"
                >
                  &lt;/&gt; Source Code
                </a>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-95 z-50 flex items-center justify-center p-4"
          onClick={closeModal}
        >
          <div
            className="relative max-w-6xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-white text-4xl hover:text-gray-300 z-10 bg-gray-900 bg-opacity-50 w-12 h-12 rounded-full flex items-center justify-center"
            >
              ×
            </button>

            {/* Image */}
            <img
              src={images[currentImageIndex]}
              alt={`${title} - ${currentImageIndex + 1}`}
              className="w-full h-auto max-h-[85vh] object-contain rounded-lg"
            />

            {/* Navigation */}
            {images.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white text-5xl hover:text-gray-300 bg-gray-900 bg-opacity-50 w-14 h-14 rounded-full flex items-center justify-center"
                >
                  ‹
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white text-5xl hover:text-gray-300 bg-gray-900 bg-opacity-50 w-14 h-14 rounded-full flex items-center justify-center"
                >
                  ›
                </button>
              </>
            )}

            {/* Slide indicators */}
            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-2">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`h-2 w-2 rounded-full transition-all ${
                    index === currentImageIndex ? 'bg-white w-8' : 'bg-gray-500'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default ProjectCard;
