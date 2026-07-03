import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const highlights = [
  'Màn hình AMOLED 2.07" (432×514)',
  'Khung nhôm nguyên khối (34.3g)',
  'Theo dõi sức khỏe AI (SpO₂, giấc ngủ, căng thẳng)',
  'GPS tích hợp (5 hệ thống vệ tinh)',
  'Sạc từ tính (~2.5 giờ)',
];

export default function AboutProduct() {
  return (
    <section id="about" className="relative py-section-tablet md:py-section overflow-hidden">
      <div className="max-w-content mx-auto section-padding relative">
        {/* Ảnh nền bên phải - full chiều cao, nhạt dần về trái */}
        <div
          className="absolute inset-y-0 right-0 w-full lg:w-[55%] pointer-events-none"
          style={{
            maskImage: 'linear-gradient(to left, black 30%, transparent 95%)',
            WebkitMaskImage: 'linear-gradient(to left, black 30%, transparent 95%)',
          }}
        >
          <img
            src="/imgs/img_3.webp"
            alt="Amazfit Bip Max"
            className="w-full h-full object-contain object-right"
            width="750" height="500"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="relative bg-white/20 lg:bg-transparent backdrop-blur-[2px] lg:backdrop-blur-none rounded-2xl lg:rounded-none p-5 lg:p-0 -m-5 lg:m-0"
          >
            <span className="section-title">GIỚI THIỆU</span>
            <h2 className="section-heading">Sản phẩm</h2>
            <p className="mt-4 text-text/60 dark:text-gray-400 leading-relaxed max-w-md">
                Với màn hình lớn, hỗ trợ nghe gọi qua Bluetooth, Zepp OS đa tiện ích cùng nhiều tính năng sức khỏe, luyện tập và định vị hiện đại,... Amazfit Bip Max mang đến trải nghiệm sử dụng linh hoạt cho cả công việc, vận động và sinh hoạt hằng ngày. 
            </p>

            <ul className="mt-8 space-y-4">
              {highlights.map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Check size={14} className="text-primary" />
                  </div>
                  <span className="text-text/70 dark:text-gray-300">{item}</span>
                </li>
              ))}
            </ul>

            {/* Watermark */}
            <span className="absolute -bottom-16 -left-10 text-[8rem] font-heading font-extrabold text-secondary/5 dark:text-white/5 select-none pointer-events-none">
              NĂNG ĐỘNG
            </span>
          </motion.div>

          {/* Right column - ảnh nằm nền phía sau */}
          <div className="hidden lg:block" />
        </div>
      </div>
    </section>
  );
}
