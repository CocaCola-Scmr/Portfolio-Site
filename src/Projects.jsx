import Navbar from './Navbar.jsx';
import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard.jsx';

function Projects() {
  const projects = [
    {
      id: '1',
      name: 'Skintellgience',
      date: 'May 2025',
      description:
        'A personalised mens skincare recommendation app, based on individual skin type, needs and goals.',
      technologies: ['React JS', 'Flask'],
      images: [
        '/assets/SkintelligencePhotos/skintelligence1.png',
        '/assets/SkintelligencePhotos/skintelligence2.png',
        '/assets/SkintelligencePhotos/skintelligence3.png',
        '/assets/SkintelligencePhotos/skintelligence4.png',
        '/assets/SkintelligencePhotos/skintelligence5.png',
      ],
      codeUrl: 'https://github.com/inVinci123/skintelligence/tree/frontend',
    },
    {
      id: '2',
      name: 'StudyPal',
      date: 'May 2024 - September 2024',
      description:
        'A collaborative study platform allowing students to track and compete in task progress with others.',
      technologies: ['React JS', 'MongoDB'],
      images: [
        '/assets/StudyPal/studypal1.png',
        '/assets/StudyPal/studypal2.png',
        '/assets/StudyPal/studypal3.png',
        '/assets/StudyPal/studypal4.png',
      ],
      codeUrl:
        'https://github.com/devsoc-unsw/trainee-rogue-24t2/tree/frontend',
    },
    {
      id: '3',
      name: 'Gadget Compass',
      date: 'March 2023 - June 2023',
      description:
        'A smartphone recommendation app, providing personalised recommendations based on a persons unique preferences',
      technologies: ['HTML & CSS', 'JS'],
      images: [
        '/assets/GadgetCompass/1.png',
        '/assets/GadgetCompass/2.png',
        '/assets/GadgetCompass/3.png',
        '/assets/GadgetCompass/4.png',
        '/assets/GadgetCompass/5.png',
      ],
      projectUrl: 'https://cocacola-scmr.github.io/Gadget-Compass/',
      codeUrl: 'https://github.com/CocaCola-Scmr/Gadget-Compass',
    },
  ];

  return (
    <>
      {/* Background Gradients */}
      <div className="fixed inset-0 z-[-1] pointer-events-none overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            x: [0, 30, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute top-[-20%] left-[-10%] w-[70vw] h-[70vw] min-w-[800px] bg-[#04CFED]/10 rounded-full blur-[140px]"
        />
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            x: [0, -40, 0],
            y: [0, -40, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 2,
          }}
          className="absolute bottom-[-20%] right-[-10%] w-[70vw] h-[70vw] min-w-[800px] bg-[#E503E8]/10 rounded-full blur-[140px]"
        />
      </div>

      <Navbar />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="flex flex-wrap justify-center gap-10 max-w-[1500px] w-[90vw] mx-auto"
      >
        <div className="w-[90vw] max-w-[1500px] pt-40 md:pt-40 lg:pt-30 xl:pt-15 2xl:pt-10 pb-2 mx-auto">
          <h2 className="text-5xl md:text-7xl lg:text-7xl xl:text-8xl font-bold text-left flex items-end mx-0 mb-10 h-[10vw] text-white/95">
            <span>My&nbsp;</span>
            <span
              style={{
                color: '#10f2e1',
                backgroundImage:
                  'linear-gradient(90deg, #04CFED 0%, #E503E8 100%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                display: 'inline-block',
                paddingBottom: '0.4em',
                marginBottom: '-0.4em',
              }}
            >
              Projects
            </span>
            .
          </h2>

          <p className="text-lg md:text-2xl text-left text-white/80">
            A collection of things I've made including society projects,
            hackathons and some passion projects.
          </p>
        </div>

        {projects.map((project, index) => (
          <div
            key={project.id}
            className="w-full max-[900px]:w-full min-[900px]:w-[calc(50%-1.25rem)]"
          >
            <ProjectCard project={project} index={index} />
          </div>
        ))}
      </motion.div>
    </>
  );
}

export default Projects;
