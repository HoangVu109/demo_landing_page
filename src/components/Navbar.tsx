import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const navLinks = [
  { name: 'Trang chủ', href: '#home' },
  { name: 'Sản phẩm', href: '#about' },
  { name: 'Tính năng', href: '#features' },
  { name: 'Thông số', href: '#technologies' },
  { name: 'Đánh giá', href: '#reviews' },
  { name: 'Liên hệ', href: '#newsletter' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { theme, toggle } = useTheme();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 h-20 flex items-center transition-all duration-300 ${
        scrolled ? 'bg-white/95 dark:bg-gray-900/95 backdrop-blur shadow-md dark:shadow-gray-950/50' : 'bg-transparent'
      }`}
    >
      <div className="max-w-content mx-auto w-full flex items-center justify-between section-padding">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2">
          <img src="/imgs/brand_logo.webp" alt="Amazfit" className="h-10 w-auto dark:brightness-0 dark:invert" width="400" height="150" />
        </a>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className="font-medium text-sm text-secondary/80 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA + Theme Toggle */}
        <div className="hidden lg:flex items-center gap-3">
          <button
            onClick={toggle}
            className="w-9 h-9 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center hover:scale-110 transition-transform"
            aria-label={theme === 'dark' ? 'Chuyển sang chế độ sáng' : 'Chuyển sang chế độ tối'}
          >
            {theme === 'dark' ? <Sun size={16} className="text-yellow-400" /> : <Moon size={16} className="text-secondary dark:text-gray-300" />}
          </button>
          <button className="btn-primary text-sm !py-2.5 !px-6">
            Mua ngay
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden text-secondary dark:text-white"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="lg:hidden absolute top-20 left-0 right-0 bg-white dark:bg-gray-900 shadow-lg dark:shadow-gray-950/50 py-6"
        >
          <ul className="flex flex-col items-center gap-4">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="font-medium text-secondary/80 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors"
                >
                  {link.name}
                </a>
              </li>
            ))}
            <li>
              <button className="btn-primary text-sm !py-2.5 !px-8 w-full">
                Mua ngay
              </button>
            </li>
          </ul>
        </motion.div>
      )}
    </motion.nav>
  );
}
