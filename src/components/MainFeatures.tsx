import { motion } from 'framer-motion';
import {
  Heart, Dumbbell, MapPin, Map,
  Music, Camera, Search, Palette,
} from 'lucide-react';

const features = [
  { icon: Heart, title: 'Theo dõi Sức khỏe', desc: 'Nhịp tim, SpO₂, giấc ngủ & căng thẳng' },
  { icon: Dumbbell, title: '100+ Chế độ Thể thao', desc: 'Theo dõi mọi bài tập' },
  { icon: MapPin, title: 'Định vị GPS', desc: 'GPS, GLONASS, Galileo, BDS, QZSS' },
  { icon: Map, title: 'Bản đồ Ngoại tuyến', desc: 'Điều hướng không cần internet' },
  { icon: Music, title: 'Điều khiển Nhạc', desc: 'Quản lý danh sách phát' },
  { icon: Camera, title: 'Điều khiển Camera', desc: 'Chụp ảnh từ xa' },
  { icon: Search, title: 'Tìm Điện thoại', desc: 'Không bao giờ thất lạc' },
  { icon: Palette, title: 'Mặt Đồng hồ Tùy chỉnh', desc: 'Cá nhân hóa phong cách' },
];

export default function MainFeatures() {
  return (
    <section className="py-section-tablet md:py-section">
      <div className="max-w-content mx-auto section-padding">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="section-title">TÍNH NĂNG CHÍNH</span>
          <h2 className="section-heading">Mọi thứ Bạn cần</h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-12 items-center">
          {/* Watch Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex justify-center"
          >
            <img
              src="/imgs/img_5.webp"
              alt="Amazfit Bip Max"
              className="w-auto h-[400px] object-contain drop-shadow-2xl"
              width="1024" height="1024"
            />
          </motion.div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {features.map(({ icon: Icon, title, desc }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                whileHover={{ borderColor: '#2CC7D6' }}
                className="border-2 border-border rounded-2xl p-5 hover:shadow-lg transition-all cursor-pointer"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                  <Icon size={20} className="text-primary" />
                </div>
                <h3 className="font-heading font-semibold text-secondary mb-1">{title}</h3>
                <p className="text-text/50 text-sm">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
