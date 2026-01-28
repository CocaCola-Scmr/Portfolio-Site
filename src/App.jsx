import { Routes, Route } from 'react-router-dom';
import './App.css';
import Landing from './Landing';
import Projects from './Projects';
import Experience from './Experience';
import About from './About';
import CustomCursor from './components/CustomCursor';
import Navbar from './Navbar';
import { Analytics } from '@vercel/analytics/react';

function App() {
  return (
    <>
      <Navbar />

      <CustomCursor />

      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/about" element={<About />} />
      </Routes>

      <Analytics />
    </>
  );
}

export default App;
