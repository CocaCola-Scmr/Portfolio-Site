import Navbar from './Navbar.jsx';
import Footer from './Footer.jsx';
import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard.jsx';
import PageBackground from './components/PageBackground.jsx';

function Projects() {
  const projects = [
    {
      id: '1',
      name: 'PineWire',
      date: 'June 2026 - July 2026',
      description:
        "A cybersecurity education tool that shows what public WiFi networks can see. Creates a real hotspot, captures connected devices' live traffic, and presents it in plain language.",
      technologies: ['React JS', 'Python', 'FastAPI', 'WebSockets', 'Scapy'],
      images: [
        '/assets/PineWire/PineWire0.png?v=2',
        '/assets/PineWire/PineWire1.png?v=2',
        '/assets/PineWire/PineWire2.png?v=2',
        '/assets/PineWire/PineWire3.png?v=2',
        '/assets/PineWire/PineWire4.png?v=2',
      ],
      codeUrl: 'https://github.com/CocaCola-Scmr/Project-PineWire',
      projectUrl: 'https://project-pine-wire-frontend.vercel.app/',
      imageVignette: true,
    },
    {
      id: '2',
      name: 'Frequencies',
      date: 'May 2026',
      description:
        'Runners Up Award winner at the  DevSoc Halftime Hackathon. A full-stack audio social platform where users share a single 10-second sound once a day.',
      technologies: ['React JS', 'Supabase', 'PostgreSQL', 'TypeScript', 'Node.js', 'OpenAI'],
      images: [
        'https://d112y698adiu2z.cloudfront.net/photos/production/software_photos/004/687/113/datas/original.png',
        'https://d112y698adiu2z.cloudfront.net/photos/production/software_photos/004/687/114/datas/original.png',
        'https://d112y698adiu2z.cloudfront.net/photos/production/software_photos/004/687/115/datas/original.png',
        'https://d112y698adiu2z.cloudfront.net/photos/production/software_photos/004/687/116/datas/original.png',
        'https://d112y698adiu2z.cloudfront.net/photos/production/software_photos/004/687/123/datas/original.png',
      ],
      codeUrl: 'https://github.com/AndyAtmadja03S/halftime',
      projectUrl: 'https://frequenciess-frontend.vercel.app/',
      imageFit: 'cover',
    },
    {
      id: '3',
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
      imageVignette: true,
    },
    {
      id: '4',
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
      codeUrl: 'https://github.com/devsoc-unsw/trainee-rogue-24t2/tree/frontend',
    },
    {
      id: '5',
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
      imageVignette: true,
    },
  ];

  return (
    <>
      <PageBackground />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="flex flex-wrap justify-start gap-10 max-w-[1500px] w-[90vw] mx-auto"
      >
        <div className="w-[90vw] max-w-[1500px] pt-40 xs:pt-50 md:pt-40 pb-2 mx-auto text-left">
          <h2 className="text-5xl md:text-7xl font-bold text-left mb-6 text-white/95">
            <span>My&nbsp;</span>
            <span
              style={{
                color: '#10f2e1',
                backgroundImage: 'linear-gradient(90deg, #04CFED 0%, #E503E8 100%)',
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

          <p className="text-lg md:text-2xl text-white/80 text-left">
            A collection of things I've made including society projects, hackathons and some passion
            projects.
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
      <Footer />
    </>
  );
}

export default Projects;
