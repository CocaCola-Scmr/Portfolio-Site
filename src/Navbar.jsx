import { JSX } from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';

function Navbar() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.2 }}
      className="fixed top-10 left-0 right-0 z-50 flex justify-center px-4"
    >
      <nav className="flex items-center h-[80px] gap-20 px-10 bg-[#070812]/80 backdrop-blur-md border border-white/10 rounded-full shadow-lg">
        {/* Left side - Logo/Name */}
        <NavLink
          to="/"
          className="text-2xl font-bold"
          style={{
            color: '#10f2e1',
            backgroundImage: 'linear-gradient(90deg, #04CFED 0%, #E503E8 100%)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            display: 'inline-block',
          }}
        >
          Naman.
        </NavLink>

        {/* Right side - Navigation Links */}
        <div className="flex items-center gap-8 md:gap-10">
          {[
            { path: '/projects', label: 'Projects' },
            { path: '/experience', label: 'Experience' },
            { path: '/about', label: 'About Me' },
          ].map(({ path, label }) => (
            <NavLink
              key={path}
              to={path}
              className={({ isActive }) =>
                `text-xl transition-colors relative ${
                  isActive
                    ? 'text-white font-medium'
                    : 'text-gray-200 hover:text-white'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {label}
                  {isActive && (
                    <motion.div
                      layoutId="navbar-underline"
                      className="absolute left-0 right-0 -bottom-1 h-[2px] bg-gradient-to-r from-[#04CFED] to-[#E503E8]"
                      transition={{
                        type: 'spring',
                        stiffness: 350,
                        damping: 30,
                      }}
                    />
                  )}
                </>
              )}
            </NavLink>
          ))}
        </div>
      </nav>
    </motion.div>
  );
}

export default Navbar;
