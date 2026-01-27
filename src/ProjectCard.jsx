import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, ChevronLeft, ChevronRight } from 'lucide-react';

const ProjectCard = ({ project, index }) => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [direction, setDirection] = useState(1); // 1 for forward, -1 for backward

  useEffect(() => {
    if (project.images.length <= 1) return;

    const interval = setInterval(() => {
      if (!isHovered) {
        setDirection(1);
        setCurrentImage((prev) => (prev + 1) % project.images.length);
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [project.images.length, isHovered]);

  const nextImage = () => {
    setDirection(1);
    setCurrentImage((prev) => (prev + 1) % project.images.length);
  };

  const prevImage = () => {
    setDirection(-1);
    setCurrentImage(
      (prev) => (prev - 1 + project.images.length) % project.images.length,
    );
  };

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    e.currentTarget.style.setProperty('--mouse-x', `${x}%`);
    e.currentTarget.style.setProperty('--mouse-y', `${y}%`);
  };

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="card-glow group flex flex-col"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseMove={handleMouseMove}
      whileHover={{ scale: 1.01, transition: { duration: 0.1 } }}
    >
      {/* Image Slideshow */}
      <div className="relative w-full aspect-video overflow-hidden rounded-t-xl bg-white/0">
        {project.images.map((image, imgIndex) => {
          const isCurrent = currentImage === imgIndex;
          const isNext =
            (currentImage + 1) % project.images.length === imgIndex;
          const isPrev =
            (currentImage - 1 + project.images.length) %
              project.images.length ===
            imgIndex;

          let x = '100%';
          if (isCurrent) {
            x = '0%';
          } else if (direction === 1) {
            x = isNext ? '100%' : '-100%';
          } else {
            x = isPrev ? '-100%' : '100%';
          }

          return (
            <motion.img
              key={imgIndex}
              src={image}
              alt={`${project.name} screenshot ${imgIndex + 1}`}
              className="absolute inset-0 w-full h-full object-contain p-4"
              initial={false}
              animate={{
                x,
                opacity: isCurrent ? 1 : 0,
              }}
              transition={{
                duration: 0.6,
                ease: [0.25, 0.1, 0.25, 1],
              }}
            />
          );
        })}

        {/* Slideshow Controls */}
        {project.images.length > 1 && (
          <>
            <button
              onClick={prevImage}
              className="absolute left-3 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-gray-900/80 backdrop-blur-sm border border-gray-700 opacity-0 group-hover:opacity-100 transition-opacity duration-200 hover:bg-gray-800"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-3 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-gray-900/80 backdrop-blur-sm border border-gray-700 opacity-0 group-hover:opacity-100 transition-opacity duration-200 hover:bg-gray-800"
              aria-label="Next image"
            >
              <ChevronRight className="w-4 h-4" />
            </button>

            {/* Dots indicator */}
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-10 flex gap-3 isolate">
              {project.images.map((_, dotIndex) => {
                const isActive = dotIndex === currentImage;
                return (
                  <button
                    key={dotIndex}
                    onClick={() => {
                      setDirection(dotIndex > currentImage ? 1 : -1);
                      setCurrentImage(dotIndex);
                    }}
                    className={`relative w-2 h-2 rounded-full overflow-hidden transition-colors duration-150
          ${
            isActive
              ? 'bg-[linear-gradient(45deg,#04CFED,#E503E8)]'
              : 'bg-gray-600'
          }`}
                    aria-label={`Go to slide ${dotIndex + 1}`}
                  />
                );
              })}
            </div>
          </>
        )}
      </div>

      {/* Content */}
      <div className="p-6 space-y-4 flex-1 flex flex-col">
        {/* Header */}
        <div className="flex items-start justify-between gap-4">
          <h3
            className="text-xl font-semibold text-white transition-all duration-200"
            style={{
              background: 'linear-gradient(45deg, #04CFED 0%, #E503E8 100%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              opacity: 0,
            }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = '1')}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = '0')}
          >
            {project.name}
          </h3>
          <h3 className="text-xl font-semibold text-white absolute transition-all duration-200 group-hover:opacity-0">
            {project.name}
          </h3>
          <time className="text-sm text-gray-400 font-mono whitespace-nowrap">
            {project.date}
          </time>
        </div>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span key={tech} className="tech-badge">
              {tech}
            </span>
          ))}
        </div>

        {/* Description */}
        <p className="text-gray-300 text-lg leading-relaxed text-left">
          {project.description}
        </p>

        {/* Actions */}
        <div className="flex gap-3 pt-2">
          {project.projectUrl && (
            <a
              href={project.projectUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              <ExternalLink className="w-4 h-4" />
              View Project
            </a>
          )}
          {project.codeUrl && (
            <a
              href={project.codeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
            >
              <Github className="w-4 h-4" />
              View Code
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
};

export default ProjectCard;
