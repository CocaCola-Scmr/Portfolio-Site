import Navbar from './Navbar';
import Footer from './Footer';
import { motion } from 'framer-motion';
import {
  Mail,
  Linkedin,
  Github,
  MapPin,
  GraduationCap,
  Languages,
  Heart,
  Calendar,
} from 'lucide-react';
import PageBackground from './components/PageBackground';

const skills = [
  { category: 'Languages', items: ['JavaScript', 'TypeScript', 'Shell', 'Python', 'Java', 'C'] },
  { category: 'Frontend', items: ['React', 'Vanilla JS', 'Tailwind CSS', 'Framer Motion'] },
  { category: 'Tools', items: ['Git', 'Figma', 'Adobe XD'] },
];

const personalInfo = [
  { icon: Calendar, label: 'Age', value: '19' },
  { icon: GraduationCap, label: 'Degree', value: 'B.S. Computer Science @ UNSW' },
  { icon: Languages, label: 'Languages', value: 'English, Hindi' },
  { icon: Heart, label: 'Hobbies', value: 'Cooking, Gym, Camping' },
];

const socialLinks = [
  { icon: Mail, label: 'Email', href: 'mailto:naman8591@gmail.com', value: 'Email' },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/naman-lalwani',
    value: 'LinkedIn',
  },
  { icon: Github, label: 'GitHub', href: 'https://github.com/CocaCola-Scmr', value: 'GitHub' },
];

function About() {
  return (
    <>
      {/* SVG Gradient Definition */}
      <svg width="0" height="0">
        <defs>
          <linearGradient id="icon-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#04CFED" />
            <stop offset="35%" stopColor="#6B7FE8" />
            <stop offset="65%" stopColor="#B94CE8" />
            <stop offset="100%" stopColor="#E503E8" />
          </linearGradient>
        </defs>
      </svg>

      <PageBackground />
      <Navbar />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="flex flex-wrap justify-center gap-10 max-w-[1500px] w-[90vw] mx-auto"
      >
        <div className="w-[90vw] max-w-[1500px] pt-40 xs:pt-50 md:pt-40  pb-2 mx-auto">
          {/* Hero Section with motion timings */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-5xl md:text-7xl font-bold text-left mb-6 text-white/95 font-bold text-left flex items-end mx-0 mb-10 text-white/95"
            >
              <span>About&nbsp;</span>
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
                Me
              </span>
              .
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg md:text-xl text-white/80 text-left mb-5 max-w-[900px]"
            >
              I’m Naman Lalwani, a UNSW Computer Science student who enjoys building software that's
              both functional and easy to use. Besides coding, I also enjoy cooking up new recipies
              and hitting the gym.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap items-center gap-4 text-muted-foreground my-10 text-sm md:text-lg text-white/80"
            >
              <div className="flex items-center gap-2">
                <MapPin className="w-6 h-6" style={{ stroke: 'url(#icon-gradient)' }} />
                <span>Sydney, AUS</span>
              </div>
              <span className="hidden sm:inline text-border opacity-30">•</span>
              <span className="inline-flex items-center px-3 py-1 rounded-full bg-[#10B981]/10 border border-[#10B981]/20 text-[#10B981] text-sm font-medium shadow-[0_0_15px_-4px_rgba(16,185,129,0.5)] backdrop-blur-sm">
                <span className="w-2 h-2 rounded-full bg-[#10B981] mr-2 animate-pulse shadow-[0_0_8px_#10B981]" />
                Open to opportunities
              </span>
            </motion.div>
          </motion.section>
          {/* Skills Section (original layout, themed) */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mb-8"
          >
            <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-left">
              Skills & Technologies.
            </h2>
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {skills.map((skillGroup, index) => (
                <motion.div
                  key={skillGroup.category}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                  // className="card-glow p-6 rounded-xl"
                  // className="p-6 card-glow"
                >
                  <h3 className="text-md font-mono mb-4 uppercase tracking-wider text-left font-normal">
                    {skillGroup.category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map((skill) => (
                      <span key={skill} className="tech-badge">
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Personal Info Grid (original layout, themed) */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mb-16"
          >
            <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-left">Quick Facts</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {personalInfo.map((info, index) => (
                <motion.div
                  key={info.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.7 + index * 0.05 }}
                  className="card-glow p-4 rounded-xl text-left"
                >
                  <info.icon className="w-5 h-5 mb-2" style={{ stroke: 'url(#icon-gradient)' }} />
                  <p className="text-xs text-white/60 uppercase tracking-wider mb-1">
                    {info.label}
                  </p>
                  <p className="text-sm font-medium">{info.value}</p>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Connect Section (original layout, themed) */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-left">Let's Connect</h2>
            <div className="flex flex-col sm:flex-row gap-4">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.9 + index * 0.1 }}
                  className="social-btn group relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <link.icon className="w-5 h-5 text-gray-400 group-hover:text-[#04CFED] transition-colors duration-300 relative z-10" />
                  <span className="social-text text-gray-300 relative z-10">{link.value}</span>
                </motion.a>
              ))}
            </div>
          </motion.section>
        </div>
      </motion.div>
      <Footer />
    </>
  );
}

export default About;
