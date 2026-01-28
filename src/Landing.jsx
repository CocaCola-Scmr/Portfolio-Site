import { StarsBackground } from '@/components/animate-ui/components/backgrounds/stars';
import { GravityStarsBackground } from '@/components/animate-ui/components/backgrounds/gravity-stars';
import Navbar from './Navbar';
import { motion } from 'framer-motion';
import TypeWriter from './components/TypeWriter';

function Landing() {
  return (
    <>
      <StarsBackground
        starColor="#ffffffbd"
        factor={0.2}
        speed={70}
        className="w-full h-screen"
        transition={{ stiffness: 60, damping: 20 }}
      >
        <div className="relative z-10 flex items-center justify-center w-full h-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.5 }}
            className="text-center px-4 md:px-8 max-w-2xl"
          >
            {/* Main heading */}
            <p className="text-sm md:text-2xl text-white mb-6 text-gray-300 leading-tight">
              Hey There!
            </p>

            <h2 className="text-4xl md:text-6xl font-bold mb-4">
              <span>I'm </span>
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
                Naman Lalwani
              </span>
            </h2>

            <br></br>

            {/* Description with typing animation */}
            <p className="text-lg md:text-2xl leading-relaxed">
              <span>A </span>
              <TypeWriter
                words={['Computer Science Student', 'Robotics Coach', 'Tech Enthusiast']}
                typingSpeed={80}
                deletingSpeed={40}
                pauseTime={2000}
              />
            </p>
          </motion.div>
        </div>
      </StarsBackground>
    </>
  );
}

export default Landing;
