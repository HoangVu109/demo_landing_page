import { motion } from 'framer-motion';
import { MessageSquare } from 'lucide-react';

const messages = [
  { type: 'icon' as const, icon: MessageSquare, label: 'SMS', color: 'bg-green-400' },
  { type: 'img' as const, img: '/imgs/zalo_icon.webp', label: 'Zalo', color: 'bg-blue-400' },
  { type: 'img' as const, img: '/imgs/mess_icon.webp', label: 'Messenger', color: 'bg-blue-500' },
  { type: 'img' as const, img: '/imgs/line_icon.webp', label: 'LINE', color: 'bg-[#22BA4F]' },
];

export default function FeatureMessages() {
  return (
    <section className="py-section-tablet md:py-section bg-gray-50">
      <div className="max-w-content mx-auto section-padding">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Watch (left side this time) */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="flex justify-center relative order-2 lg:order-1"
          >
            <div className="relative">
              {/* Message bubbles floating */}
              {messages.map((msg, i) => (
                <motion.div
                  key={msg.label}
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 3, delay: i * 0.7, repeat: Infinity }}
                  className={`absolute ${msg.color} text-white rounded-2xl px-4 py-2 flex items-center gap-2 shadow-lg`}
                  style={{
                    top: `${10 + i * 22}%`,
                    right: i < 2 ? '-60px' : 'auto',
                    left: i >= 2 ? '-70px' : 'auto',
                  }}
                >
                  {msg.type === 'icon' ? (
                    <msg.icon size={14} />
                  ) : (
                    <img src={msg.img} alt={msg.label} className="w-4 h-4 object-contain" />
                  )}
                  <span className="text-xs font-medium">{msg.label}</span>
                </motion.div>
              ))}

              <div className="relative z-10">
                <img
                  src="/imgs/img_2.webp"
                  alt="Amazfit Bip Max"
                  className="w-56 h-auto object-contain drop-shadow-2xl"
                  width="400" height="500"
                />
              </div>
            </div>
          </motion.div>

          {/* Text (right side this time) */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="order-1 lg:order-2"
          >
            <span className="section-title">TIỆN LỢI</span>
            <h2 className="section-heading">Tất cả Tin nhắn trong Một nơi</h2>
            <p className="mt-4 text-text/60 leading-relaxed max-w-md">
              Luôn cập nhật mọi cuộc trò chuyện. Nhận thông báo từ
              SMS, Messenger, Zalo, LINE và Facebook Messenger ngay trên cổ tay.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {messages.map((msg) => (
                <div
                  key={msg.label}
                  className={`${msg.color} text-white rounded-full px-5 py-2 flex items-center gap-2`}
                >
                  {msg.type === 'icon' ? (
                    <msg.icon size={16} />
                  ) : (
                    <img src={msg.img} alt={msg.label} className="w-4 h-4 object-contain" />
                  )}
                  <span className="text-sm font-medium">{msg.label}</span>
                </div>
              ))}
            </div>

            <button className="btn-primary mt-8">Khám phá</button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
