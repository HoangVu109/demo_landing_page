import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

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
        scrolled ? 'bg-white/95 backdrop-blur shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="max-w-content mx-auto w-full flex items-center justify-between section-padding">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2">
          <img src="/imgs/brand_logo.webp" alt="Amazfit" className="h-10 w-auto" width="400" height="150" />
        </a>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className="font-medium text-sm text-secondary/80 hover:text-primary transition-colors"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <button className="hidden lg:block btn-primary text-sm !py-2.5 !px-6">
          Mua ngay
        </button>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden text-secondary"
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
          className="lg:hidden absolute top-20 left-0 right-0 bg-white shadow-lg py-6"
        >
          <ul className="flex flex-col items-center gap-4">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="font-medium text-secondary/80 hover:text-primary transition-colors"
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
