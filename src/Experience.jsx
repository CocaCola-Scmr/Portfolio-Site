import Navbar from './Navbar';
import Footer from './Footer';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, Heart, ArrowRight, Play, X } from 'lucide-react';
import { useState } from 'react';
import PageBackground from './components/PageBackground';

// Media imports for Magikid
import autonomousCar from './assets/Experience/Autonomous Crash Avoidance.mp4';
import discLauncher from './assets/Experience/Disc Launcher.mp4';
import roboticArm from './assets/Experience/Robotic Arm Car.mp4';
import tankRobot from './assets/Experience/Tank Robot.jpg';

const experiences = [
  {
    id: '1',
    company: 'Magikid Robotics',
    role: 'Coding and Robotics Coach',
    period: 'February 2025 - Present',
    description:
      'As a coding and robotics educator, I teach new programming and robotics concepts to K – 6 children,\
       using coding robots and programs like Scratch. Currently I run weekly workshops where students build\
       contraptions like autonomous cars, robotic arms, and some more you can see right here!',
    skills: ['Teaching', 'Robotics', 'Scratch', 'Communication', 'Problem Solving'],
    current: true,
    media: [
      { type: 'video', src: autonomousCar, title: 'Autonomous Crash Avoidance' },
      { type: 'video', src: discLauncher, title: 'Disc Launcher' },
      { type: 'video', src: roboticArm, title: 'Robotic Arm Car' },
      { type: 'image', src: tankRobot, title: 'Tank Robot' },
    ],
  },
  {
    id: '3',
    company: "McDonald's",
    role: 'Crew Member',
    period: 'December 2024 - May 2025',
    description:
      "Look, working at McDonald's isn't exactly the most glamorous job, but it's taught me a lot of things - I've gotten better at working with others to coordinate tasks, learning new skills and processes, following the company's strict guidelines, etc - especially in a high pressure, fast paced environment where it was vital to maintain quality and composure. And I think these skills I developed would all be pretty useful for any role.",
    skills: ['Teamwork', 'Time Management', 'Quality Control', 'Composure Under Pressure'],
    current: false,
  },
  {
    id: '2',
    company: 'Australian Academy of Robotics and STEM (AARAS) Education',
    role: 'Coding and Robotics Educator',
    period: 'February 2024 - September 2024',
    description:
      "In my first job as a coding coach, I taught new programming concepts to K – 6 children, using coding robots and programs like Scratch. I've had a great time so far, getting pretty good at explaining new concepts in a straightforward, concise and understandable manner. I also helped students cultivate some of the soft skills required in a STEM focused environment, including teamwork, communication and problem solving.",
    skills: ['Teaching', 'Scratch', 'Robotics', 'Communication', 'Problem Solving'],
    current: false,
  },
];

const volunteering = [
  {
    id: 'v1',
    company: 'eReuse @ Arc UNSW',
    role: 'Volunteer',
    period: 'May 2025 - Present',
    promotion: { role: 'Senior Volunteer', date: 'Feb 2026' },
    description:
      'Refurbishing donated computers and tech devices to reduce e-waste and give technology a second life. Working with a team to diagnose, repair, and prepare devices for redistribution to those in need.',
    skills: ['Tech Support', 'Hardware Repair', 'Sustainability', 'Teamwork'],
    current: true,
  },
  {
    id: 'v2',
    company: 'Wellness Warriors @ Arc UNSW',
    role: 'Volunteer',
    period: 'May 2025 - Present',
    description:
      'Supporting student mental health initiatives through weekly events, peer engagement, and campus-wide activations. Helping create a welcoming and supportive environment for fellow students.',
    skills: ['Mental Health Advocacy', 'Event Coordination', 'Communication', 'Peer Support'],
    current: true,
  },
];

function Experience() {
  const [section, setSection] = useState('work');
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeMedia, setActiveMedia] = useState(null);
  const data = section === 'work' ? experiences : volunteering;
  const active = data[activeIndex];
  const Icon = section === 'work' ? Briefcase : Heart;

  const handleSectionChange = (newSection) => {
    if (newSection !== section) {
      setSection(newSection);
      setActiveIndex(0);
    }
  };

  return (
    <>
      <PageBackground />

      <div className="w-[90vw] max-w-[1500px] pt-40 xs:pt-50 md:pt-40  mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          // className="flex gap-10 max-w-[1500px] w-[90vw] mx-auto"
        >
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
              }}
            >
              Experience
            </span>
            .
          </h2>
          <p className="text-lg md:text-2xl text-left text-white/80 mb-10">
            My previous jobs and work experience over the years.
          </p>

          {/* Section Toggle */}
          <div className="flex gap-2 mb-8 p-1.5 bg-[#0b0c16]/60 rounded-xl w-fit border border-white/10">
            <button
              onClick={() => handleSectionChange('work')}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 flex items-center gap-2 ${
                section === 'work'
                  ? 'text-white shadow-lg'
                  : 'text-white/60 hover:text-white/80 hover:bg-white/5'
              }`}
              style={
                section === 'work'
                  ? { background: 'linear-gradient(135deg, #04CFED 0%, #E503E8 100%)' }
                  : {}
              }
            >
              <Briefcase className="w-4 h-4" />
              Work Experience
            </button>
            <button
              onClick={() => handleSectionChange('volunteering')}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 flex items-center gap-2 ${
                section === 'volunteering'
                  ? 'text-white shadow-lg'
                  : 'text-white/60 hover:text-white/80 hover:bg-white/5'
              }`}
              style={
                section === 'volunteering'
                  ? { background: 'linear-gradient(135deg, #04CFED 0%, #E503E8 100%)' }
                  : {}
              }
            >
              <Heart className="w-4 h-4" />
              Volunteering
            </button>
          </div>
        </motion.div>

        {/* Two-column tab layout */}
        <div className="grid grid-cols-1 md:grid-cols-[360px_1fr] gap-8 items-start">
          {/* Left: Tab list */}
          <div className="space-y-4">
            {data.map((exp, idx) => {
              const isActive = idx === activeIndex;
              return (
                <motion.button
                  key={exp.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: idx * 0.1, ease: 'easeOut' }}
                  whileHover={{ scale: 1.02, x: 4 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setActiveIndex(idx)}
                  className={`group w-full text-left rounded-2xl px-6 py-5 flex items-center gap-4 transition-all duration-300 border relative overflow-hidden ${
                    isActive
                      ? 'bg-[#131221]/80 border-transparent'
                      : 'bg-[#0b0c16]/40 border-white/10 hover:bg-[#111224]/60 hover:border-white/20'
                  }`}
                  style={
                    isActive
                      ? {
                          boxShadow:
                            '0 0 40px -5px rgba(4, 207, 237, 0.4), 0 0 40px -5px rgba(229, 3, 232, 0.2), inset 0 1px 0 rgba(255,255,255,0.1)',
                        }
                      : {}
                  }
                >
                  {/* Animated gradient border for active state */}
                  {isActive && (
                    <motion.div
                      className="absolute inset-0 rounded-2xl"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      style={{
                        background:
                          'linear-gradient(135deg, #04CFED 0%, #E503E8 50%, #04CFED 100%)',
                        backgroundSize: '200% 200%',
                        padding: '1.5px',
                        mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                        maskComposite: 'exclude',
                        WebkitMask:
                          'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                        WebkitMaskComposite: 'xor',
                        animation: 'gradientShift 3s ease infinite',
                      }}
                    />
                  )}

                  {/* Hover glow effect */}
                  <div
                    className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none ${
                      isActive ? 'hidden' : ''
                    }`}
                    style={{
                      background:
                        'radial-gradient(circle at 50% 50%, rgba(4, 207, 237, 0.1) 0%, transparent 70%)',
                    }}
                  />

                  <motion.div
                    className={`flex items-center justify-center w-14 h-14 rounded-full transition-all duration-300 ${
                      isActive
                        ? ''
                        : 'bg-white/5 border border-white/10 group-hover:border-white/20'
                    }`}
                    animate={isActive ? { rotate: [0, 5, -5, 0] } : {}}
                    transition={{ duration: 0.5, ease: 'easeInOut' }}
                    style={
                      isActive
                        ? {
                            background: 'linear-gradient(135deg, #04CFED 0%, #E503E8 100%)',
                            boxShadow: '0 0 20px rgba(4, 207, 237, 0.5)',
                          }
                        : {}
                    }
                  >
                    <motion.div
                      animate={isActive ? { scale: [1, 1.2, 1] } : {}}
                      transition={{ duration: 0.3 }}
                    >
                      <Icon
                        className={`w-6 h-6 transition-colors duration-300 ${
                          isActive ? 'text-white' : 'text-white/80 group-hover:text-white'
                        }`}
                      />
                    </motion.div>
                  </motion.div>
                  <div className="flex-1 relative z-10">
                    <p
                      className={`text-xl font-semibold leading-tight transition-colors duration-300 ${
                        isActive ? '' : 'text-white/85'
                      }`}
                      style={
                        isActive
                          ? {
                              backgroundImage: 'linear-gradient(90deg, #04CFED 0%, #E503E8 100%)',
                              backgroundClip: 'text',
                              WebkitBackgroundClip: 'text',
                              WebkitTextFillColor: 'transparent',
                            }
                          : {}
                      }
                    >
                      {exp.role}
                    </p>
                    {exp.promotion && (
                      <div
                        className="relative inline-flex items-center gap-1.5 mt-2 px-3 py-1 text-xs font-medium rounded-full overflow-hidden"
                        style={{
                          background: 'linear-gradient(135deg, #04CFED 0%, #E503E8 100%)',
                          padding: '1px',
                        }}
                      >
                        <div
                          className="flex items-center gap-1.5 px-2.5 py-1 rounded-full"
                          style={{
                            background:
                              'linear-gradient(135deg, rgba(4, 207, 237, 0.1) 0%, rgba(229, 3, 232, 0.1) 100%), #0d0e1a',
                          }}
                        >
                          <ArrowRight className="w-3 h-3 text-[#04CFED]" />
                          <span
                            style={{
                              backgroundImage: 'linear-gradient(90deg, #04CFED 0%, #E503E8 100%)',
                              backgroundClip: 'text',
                              WebkitBackgroundClip: 'text',
                              WebkitTextFillColor: 'transparent',
                            }}
                          >
                            {exp.promotion.role} ({exp.promotion.date})
                          </span>
                        </div>
                      </div>
                    )}
                    <p
                      className={`text-sm my-2 transition-colors duration-300 ${
                        isActive ? 'text-white/80' : 'text-white/60'
                      }`}
                    >
                      {exp.company}
                    </p>
                    <div
                      className={`flex items-center gap-1.5 mt-1 text-sm transition-colors duration-300 ${
                        isActive ? '' : 'text-white/50'
                      }`}
                      style={
                        isActive
                          ? {
                              backgroundImage: 'linear-gradient(90deg, #04CFED 0%, #E503E8 100%)',
                              backgroundClip: 'text',
                              WebkitBackgroundClip: 'text',
                              WebkitTextFillColor: 'transparent',
                            }
                          : {}
                      }
                    >
                      <span>{exp.period}</span>
                    </div>
                  </div>
                </motion.button>
              );
            })}
          </div>

          {/* Right: Detail card */}
          <motion.div
            key={`${section}-${active.id}`}
            initial={{ opacity: 0, y: 20, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{
              duration: 0.4,
              ease: [0.25, 0.46, 0.45, 0.94],
              opacity: { duration: 0.3 },
            }}
            className="card-glow p-8 md:p-10 text-left"
          >
            <div className="flex items-start justify-between gap-4 mb-6">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-white/95 mb-4">{active.role}</h3>
                <p className="text-primary font-medium mt-1">{active.company}</p>
              </div>
              <div className="flex items-center gap-2 text-white/70 text-sm md:text-base">
                <Calendar className="w-4 h-4" />
                <span>{active.period}</span>
              </div>
            </div>

            <p className="text-white/80 leading-relaxed mb-6">{active.description}</p>

            <div className="flex flex-wrap gap-2 mb-6">
              {active.skills.map((skill, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 text-sm rounded-full bg-white/5 border border-white/10 text-white/70"
                >
                  {skill}
                </span>
              ))}
            </div>

            {/* Media Gallery */}
            {active.media && active.media.length > 0 && (
              <div className="mt-6">
                <h4 className="text-sm font-semibold text-white/70 mb-3">Gallery</h4>
                <div className="flex gap-3 overflow-x-auto pb-2 -mx-2 px-2 scrollbar-hide">
                  {active.media.map((item, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveMedia(item)}
                      className="relative group flex-shrink-0 w-40 aspect-video rounded-lg overflow-hidden border border-white/10 hover:border-white/30 transition-all duration-300"
                    >
                      {item.type === 'video' ? (
                        <>
                          <video
                            src={item.src}
                            className="w-full h-full object-cover"
                            muted
                            playsInline
                            onMouseOver={(e) => e.target.play()}
                            onMouseOut={(e) => {
                              e.target.pause();
                              e.target.currentTime = 0;
                            }}
                          />
                          <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/10 transition-all duration-300">
                            <div
                              className="w-8 h-8 rounded-full flex items-center justify-center"
                              style={{
                                background: 'linear-gradient(135deg, #04CFED 0%, #E503E8 100%)',
                              }}
                            >
                              <Play className="w-3.5 h-3.5 text-white ml-0.5" fill="white" />
                            </div>
                          </div>
                        </>
                      ) : (
                        <img
                          src={item.src}
                          alt={item.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      )}
                      <div className="absolute bottom-0 left-0 right-0 p-1.5 bg-gradient-to-t from-black/80 to-transparent">
                        <p className="text-[10px] text-white/90 font-medium truncate">
                          {item.title}
                        </p>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}
          </motion.div>

          {/* Media Modal */}
          {activeMedia && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
              onClick={() => setActiveMedia(null)}
            >
              <button
                onClick={() => setActiveMedia(null)}
                className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
              >
                <X className="w-5 h-5 text-white" />
              </button>
              <div
                className="max-w-4xl w-full max-h-[80vh] rounded-2xl overflow-hidden"
                onClick={(e) => e.stopPropagation()}
              >
                {activeMedia.type === 'video' ? (
                  <video
                    src={activeMedia.src}
                    controls
                    autoPlay
                    className="w-full h-full object-contain bg-black"
                  />
                ) : (
                  <img
                    src={activeMedia.src}
                    alt={activeMedia.title}
                    className="w-full h-full object-contain"
                  />
                )}
                <div className="p-4 bg-[#0d0e1a]">
                  <p className="text-white font-medium">{activeMedia.title}</p>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Experience;
