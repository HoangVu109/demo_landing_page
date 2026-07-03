import { motion } from 'framer-motion';
import { Phone, Mic, Speaker, Volume2 } from 'lucide-react';

const callFeatures = [
  { icon: Phone, label: 'Gọi điện Bluetooth' },
  { icon: Mic, label: 'Chống ồn' },
  { icon: Speaker, label: 'Loa' },
  { icon: Volume2, label: 'Micro' },
];

export default function FeatureCalling() {
  return (
    <section id="features" className="py-section-tablet md:py-section">
      <div className="max-w-content mx-auto section-padding">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
          >
            <span className="section-title">NHANH CHÓNG</span>
            <h2 className="section-heading">Kết nối qua Cuộc gọi</h2>
            <p className="mt-4 text-text/60 leading-relaxed max-w-md">
              Thực hiện và nhận cuộc gọi trực tiếp từ cổ tay của bạn với âm thanh
              trong trẻo và công nghệ chống ồn tiên tiến.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-4">
              {callFeatures.map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-3 p-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <Icon size={18} className="text-primary" />
                  </div>
                  <span className="font-medium text-sm text-text/70">{label}</span>
                </div>
              ))}
            </div>

            <button className="btn-outline mt-8">Khám phá</button>
          </motion.div>

          {/* Watch with Sound Waves */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="flex justify-center relative"
          >
            <div className="relative">
              {/* Sound wave rings */}
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  animate={{ scale: [1, 1.5], opacity: [0.4, 0] }}
                  transition={{ duration: 2, delay: i * 0.6, repeat: Infinity }}
                  className="absolute inset-0 rounded-full border-2 border-primary/30"
                />
              ))}

              <div className="relative z-10">
                <img
                  src="/imgs/img_2.png"
                  alt="Amazfit Bip Max"
                  className="w-56 h-auto object-contain drop-shadow-2xl"
                  width="400" height="500"
                />
              </div>

              {/* Sound wave bars */}
              <div className="absolute -right-12 top-1/2 -translate-y-1/2 flex items-end gap-1">
                {[...Array(5)].map((_, i) => (
                  <div
                    key={i}
                    className="sound-wave-bar w-2 rounded-full bg-primary"
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
