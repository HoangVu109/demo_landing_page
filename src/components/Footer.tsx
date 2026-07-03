import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const footerLinks = {
  'Sản phẩm': ['Tính năng', 'Thông số', 'Bảng giá', 'Câu hỏi'],
  'Hỗ trợ': ['Trung tâm Trợ giúp', 'Liên hệ', 'Bảo hành', 'Đổi trả'],
  'Công ty': ['Về chúng tôi', 'Tuyển dụng', 'Báo chí', 'Đối tác'],
};

export default function Footer() {
  return (
    <footer className="bg-secondary pt-section-tablet md:pt-section pb-8">
      <div className="max-w-content mx-auto section-padding">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          {/* Logo Column */}
          <div className="col-span-2 md:col-span-1">
            <a href="#" className="flex items-center gap-2 mb-4">
              <img src="/imgs/brand_logo.png" alt="Amazfit" className="h-10 w-auto brightness-0 invert" />
            </a>
            <p className="text-white/40 text-sm leading-relaxed">
              Tương lai sống thông minh, ngay trên cổ tay bạn.
            </p>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-heading font-semibold text-white mb-4">{title}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-white/40 text-sm hover:text-primary transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Newsletter Column */}
          <div>
            <h4 className="font-heading font-semibold text-white mb-4">Bản tin</h4>
            <div className="flex">
              <input
                type="email"
                placeholder="Email của bạn"
                className="w-full px-4 py-2 rounded-l-lg bg-white/5 border border-white/10 text-white text-sm placeholder-white/30 focus:outline-none focus:border-primary transition-colors"
              />
              <button className="bg-primary text-white px-3 rounded-r-lg hover:bg-primary/90 transition-colors">
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-sm">© 2026 Amazfit. Bảo lưu mọi quyền.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-white/30 text-sm hover:text-primary transition-colors">
              Chính sách Bảo mật
            </a>
            <span className="text-white/20">•</span>
            <a href="#" className="text-white/30 text-sm hover:text-primary transition-colors">
              Điều khoản
            </a>
            <span className="text-white/20">•</span>
            <a href="#" className="text-white/30 text-sm hover:text-primary transition-colors">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
