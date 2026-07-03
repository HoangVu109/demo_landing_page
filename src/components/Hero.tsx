import { motion } from 'framer-motion';
import { Watch, Battery, Droplets, Bluetooth } from 'lucide-react';

const features = [
  { icon: Watch, label: 'Màn hình AMOLED' },
  { icon: Battery, label: 'Pin lên đến 20 ngày' },
  { icon: Droplets, label: 'Chống nước 5ATM' },
  { icon: Bluetooth, label: 'Bluetooth 5.3' },
];

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[850px] flex items-center pt-20 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-primary/10 to-transparent" />

      <div className="max-w-content mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 section-padding py-20">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col justify-center"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold text-secondary leading-tight">
            Đón đầu Tương lai{' '}
            <span className="text-primary">Sống Thông minh</span>
          </h1>
          <p className="mt-6 text-lg text-text/70 leading-relaxed max-w-lg">
            Amazfit Bip Max là đồng hồ thông minh cao cấp hỗ trợ theo dõi sức khỏe,
            giao tiếp và năng suất làm việc — tất cả trong một thiết bị tinh tế
            được thiết kế cho phong cách sống hiện đại của bạn.
          </p>

          {/* Email Subscription */}
          <div className="mt-8 flex flex-col sm:flex-row gap-3 max-w-md">
            <input
              type="email"
              placeholder="Nhập email của bạn"
              className="flex-1 px-5 py-3 rounded-full border border-border focus:outline-none focus:border-primary transition-colors"
            />
            <button className="btn-primary whitespace-nowrap">Bắt đầu</button>
          </div>

          {/* Feature Icons */}
          <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4">
            {features.map(({ icon: Icon, label }) => (
              <div key={label} className="flex flex-col items-center gap-2 p-3">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Icon size={22} className="text-primary" />
                </div>
                <span className="text-xs font-medium text-text/60 text-center">{label}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right - Watch Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="relative flex items-center justify-center"
        >
          {/* Watermark */}
          <span className="absolute text-[12rem] font-heading font-extrabold text-secondary/5 select-none pointer-events-none">
            BIP MAX
          </span>

          {/* Watch Image */}
          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            className="relative z-10"
          >
            <img
              src="/imgs/img_1.png"
              alt="Amazfit Bip Max"
              className="w-auto h-[500px] object-contain drop-shadow-2xl"
              width="800" height="800"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
