import { Heart } from 'lucide-react';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full mt-20 py-6 border-t border-white/10">
      <div className="w-[90vw] max-w-[1500px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-white/50">
        <p>© {currentYear} Naman Lalwani. All rights reserved.</p>
        <p className="flex items-center gap-1.5">Built using React & Tailwind</p>
      </div>
    </footer>
  );
}

export default Footer;
