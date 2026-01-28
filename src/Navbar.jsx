import { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const isLandingPage = location.pathname === '/';

  const navLinks = [
    { path: '/projects', label: 'Projects' },
    { path: '/experience', label: 'Experience' },
    { path: '/about', label: 'About Me' },
  ];

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.2 }}
        className="fixed top-10 left-0 right-0 z-50 flex justify-center px-4"
      >
        {/* Desktop Navbar */}
        <nav
          className={`hidden min-[650px]:flex items-center h-[80px] gap-20 px-10 bg-[#070812]/80 backdrop-blur-md border border-white/10 rounded-full shadow-lg ${isLandingPage ? 'navbar-float' : ''}`}
        >
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
            {navLinks.map(({ path, label }) => (
              <NavLink
                key={path}
                to={path}
                className={({ isActive }) =>
                  `text-xl transition-colors relative ${
                    isActive ? 'text-white font-medium' : 'text-gray-200 hover:text-white'
                  }`
                }
              >
                {({ isActive }) => (
                  <span className="relative inline-block">
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
                  </span>
                )}
              </NavLink>
            ))}
          </div>
        </nav>

        {/* Mobile Navbar */}
        <nav className="flex min-[650px]:hidden items-center justify-between w-full h-[60px] px-6 bg-[#070812]/80 backdrop-blur-md border border-white/10 rounded-full shadow-lg">
          {/* Logo */}
          <NavLink
            to="/"
            className="text-xl font-bold"
            style={{
              color: '#10f2e1',
              backgroundImage: 'linear-gradient(90deg, #04CFED 0%, #E503E8 100%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              display: 'inline-block',
            }}
            onClick={() => setIsMenuOpen(false)}
          >
            Naman.
          </NavLink>

          {/* Hamburger Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="relative w-10 h-10 flex items-center justify-center rounded-full transition-all duration-300"
            style={
              isMenuOpen ? { background: 'linear-gradient(135deg, #04CFED 0%, #E503E8 100%)' } : {}
            }
            aria-label="Toggle menu"
          >
            {/* Pulsing ring on landing page */}
            {isLandingPage && !isMenuOpen && (
              <div className="absolute inset-0 rounded-full">
                <div
                  className="absolute inset-0 rounded-full navbar-pulse-ring"
                  style={{
                    background: 'linear-gradient(135deg, #04CFED 0%, #E503E8 100%)',
                    padding: '2px',
                    mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                    maskComposite: 'exclude',
                    WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                    WebkitMaskComposite: 'xor',
                  }}
                />
              </div>
            )}
            <AnimatePresence mode="wait">
              {isMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="w-5 h-5 text-white" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu className="w-5 h-5 text-white" />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </nav>
      </motion.div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 min-[650px]:hidden"
            onClick={() => setIsMenuOpen(false)}
          >
            {/* Backdrop */}
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

            {/* Menu Panel */}
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className="absolute top-28 left-4 right-4 mx-auto max-w-[400px] p-6 bg-[#0a0b14]/95 backdrop-blur-md border border-white/10 rounded-2xl shadow-2xl"
              onClick={(e) => e.stopPropagation()}
              style={{
                boxShadow:
                  '0 0 40px -10px rgba(4, 207, 237, 0.3), 0 0 40px -10px rgba(229, 3, 232, 0.2)',
              }}
            >
              <div className="flex flex-col gap-2">
                {navLinks.map(({ path, label }, index) => (
                  <motion.div
                    key={path}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.2, delay: index * 0.05 }}
                  >
                    <NavLink
                      to={path}
                      onClick={() => setIsMenuOpen(false)}
                      className="block px-4 py-3 text-lg font-medium transition-all duration-200 hover:bg-white/5 rounded-xl"
                    >
                      {({ isActive }) => (
                        <span className="relative inline-block">
                          <span
                            style={
                              isActive
                                ? {
                                    backgroundImage:
                                      'linear-gradient(90deg, #04CFED 0%, #E503E8 100%)',
                                    backgroundClip: 'text',
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent',
                                  }
                                : { color: 'rgba(255, 255, 255, 0.8)' }
                            }
                          >
                            {label}
                          </span>
                          {isActive && (
                            <motion.div
                              layoutId="mobile-navbar-underline"
                              className="absolute left-0 right-0 -bottom-1 h-[2px] bg-gradient-to-r from-[#04CFED] to-[#E503E8]"
                              transition={{
                                type: 'spring',
                                stiffness: 350,
                                damping: 30,
                              }}
                            />
                          )}
                        </span>
                      )}
                    </NavLink>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Navbar;
