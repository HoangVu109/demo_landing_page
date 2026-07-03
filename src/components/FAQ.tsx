import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: 'Pin dùng được bao lâu?',
    answer:
      'Amazfit Bip Max có pin 550 mAh dùng lên đến 20 ngày với mức sử dụng thông thường. Khi bật màn hình Luôn hiển thị, pin dùng được đến 7 ngày. Sạc đầy mất khoảng 2.5 giờ qua Đế sạc từ tính.',
  },
  {
    question: 'Có bơi được với Amazfit Bip Max không?',
    answer:
      'Có! Amazfit Bip Max đạt chuẩn ISO 22810:2010 với khả năng chống nước 5ATM, phù hợp để bơi ở vùng nước nông, tắm rửa và các hoạt động dưới nước.',
  },
  {
    question: 'Có tương thích với Android và iPhone không?',
    answer:
      'Có! Amazfit Bip Max hoạt động mượt mà với Android 7.0+ và iOS 15+ thông qua ứng dụng Zepp. Hỗ trợ Bluetooth 5.3 và kết nối Wi-Fi.',
  },
  {
    question: 'Bảo hành bao gồm những gì?',
    answer:
      'Gói Tiêu chuẩn bao gồm bảo hành 1 năm cho lỗi sản xuất. Gói Cao cấp mở rộng lên 2 năm và bao gồm bảo vệ hư hỏng do tai nạn.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-section-tablet md:py-section bg-gray-50">
      <div className="max-w-content mx-auto section-padding">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="section-title">CÂU HỎI</span>
          <h2 className="section-heading">Câu hỏi Thường gặp</h2>
        </motion.div>

        <div className="max-w-2xl mx-auto space-y-4">
          {faqs.map((faq, i) => (
            <motion.div
              key={faq.question}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.1 }}
              className="bg-white rounded-2xl overflow-hidden shadow-sm"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <span className="font-heading font-semibold text-secondary pr-4">
                  {faq.question}
                </span>
                <motion.span
                  animate={{ rotate: openIndex === i ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown size={20} className="text-primary flex-shrink-0" />
                </motion.span>
              </button>

              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="px-6 pb-6 text-text/60 leading-relaxed">{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
