import { Heart, Github } from 'lucide-react';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full mt-20 py-6 border-t border-white/10">
      <div className="w-[90vw] max-w-[1500px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-white/50">
        <p>© {currentYear} Naman Lalwani. All rights reserved.</p>
        <div className="flex items-center gap-4">
          <p className="flex items-center gap-1.5">Built using React & Tailwind</p>
          <a
            href="https://github.com/CocaCola-Scmr/Portfolio-Site"
            target="_blank"
            rel="noopener noreferrer"
            className="card-glow px-3 py-1.5 flex items-center gap-2 text-white/70 hover:text-white transition-colors duration-300"
          >
            <Github className="w-4 h-4" />
            <span>View Source</span>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
