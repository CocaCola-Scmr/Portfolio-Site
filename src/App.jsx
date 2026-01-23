import { Routes, Route } from 'react-router-dom';
import './App.css';
import Landing from './Landing';
import Projects from './Projects';
import Experience from './Experience';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/experience" element={<Experience />} />
      {/* Add more routes here, e.g.: */}
      {/* <Route path="/about" element={<About />} /> */}
    </Routes>
  );
}

export default App;
