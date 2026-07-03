import { motion } from 'framer-motion';

export default function Newsletter() {
  return (
    <section id="newsletter" className="py-section-tablet md:py-section bg-gradient-to-r from-primary to-cyan-400">
      <div className="max-w-content mx-auto section-padding">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
            Cập nhật Tin tức về Amazfit Bip Max
          </h2>
          <p className="text-white/80 mb-8">
            Đăng ký nhận bản tin để nhận ưu đãi độc quyền, thông báo sản phẩm
            mới và mẹo chăm sóc sức khỏe.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Nhập email của bạn"
              className="flex-1 px-5 py-3 rounded-full border-2 border-white/30 bg-white/10 text-white placeholder-white/50 focus:outline-none focus:border-white transition-colors"
            />
            <button className="bg-white text-primary font-semibold py-3 px-8 rounded-full hover:scale-105 transition-transform shadow-lg">
              Đăng ký
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
