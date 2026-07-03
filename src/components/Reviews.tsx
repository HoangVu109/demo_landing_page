import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const reviews = [
  {
    name: 'Thanh Hằng',
    avatar: 'TH',
    rating: 5,
    text: 'Amazfit Bip Max đã thay đổi hoàn toàn cách tôi theo dõi sức khỏe. Thời lượng pin thật đáng kinh ngạc và màn hình AMOLED thì tuyệt đẹp!',
  },
  {
    name: 'Minh Tuấn',
    avatar: 'MT',
    rating: 5,
    text: 'Đồng hồ thông minh tốt nhất tôi từng sở hữu. Tính năng theo dõi sức khỏe rất chính xác và thiết kế thì vô cùng đẹp mắt.',
  },
  {
    name: 'Thảo Nguyên',
    avatar: 'TN',
    rating: 5,
    text: 'Tôi rất thích tính năng gọi điện! Âm thanh trong trẻo và khả năng chống ồn hoạt động hoàn hảo ngay cả ở nơi đông người.',
  },
];

export default function Reviews() {
  return (
    <section id="reviews" className="py-section-tablet md:py-section bg-gray-50">
      <div className="max-w-content mx-auto section-padding">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="section-title">ĐÁNH GIÁ</span>
          <h2 className="section-heading">Khách hàng Nói gì</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, i) => (
            <motion.div
              key={review.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow"
            >
              {/* Avatar & Name */}
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center font-heading font-bold text-primary">
                  {review.avatar}
                </div>
                <div>
                  <h4 className="font-heading font-semibold text-secondary">{review.name}</h4>
                  <div className="flex gap-0.5 mt-1">
                    {[...Array(review.rating)].map((_, j) => (
                      <Star key={j} size={14} className="fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
              </div>

              <p className="text-text/60 leading-relaxed">{review.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
