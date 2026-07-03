import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const specs = [
  {
    category: 'Màn hình',
    items: [
      { label: 'Công nghệ màn hình', value: 'AMOLED' },
      { label: 'Kích thước màn hình', value: '2.07 inch' },
      { label: 'Độ phân giải', value: '432 × 514 pixels' },
      { label: 'Kích thước mặt', value: '49.5 mm' },
    ],
  },
  {
    category: 'Thiết kế',
    items: [
      { label: 'Chất liệu mặt', value: 'Kính cường lực 2D' },
      { label: 'Chất liệu khung viền', value: 'Hợp kim nhôm' },
      { label: 'Độ rộng dây', value: '2.2 cm' },
      { label: 'Chu vi cổ tay phù hợp', value: '14 - 21 cm' },
      { label: 'Khả năng thay dây', value: 'Có' },
      { label: 'Kích thước, khối lượng', value: '49.5 × 42.76 × 13.24 mm - 34.3 g' },
    ],
  },
  {
    category: 'Tiện ích',
    items: [
      { label: 'Môn thể thao', value: 'Đi bộ, Chạy bộ, Bơi lội, Đạp xe, Chèo thuyền, 100+ môn khác' },
      { label: 'Hỗ trợ nghe gọi', value: 'Nghe gọi ngay trên đồng hồ' },
      { label: 'Tiện ích đặc biệt', value: 'Màn hình luôn hiển thị, Bản đồ ngoại tuyến, Huấn luyện viên Zepp' },
      { label: 'Chống nước', value: '5 ATM - ISO 22810:2010 (Tắm, bơi vùng nước nông)' },
      { label: 'Theo dõi sức khoẻ', value: 'Nhịp tim, SpO₂, Nhiệt độ da, Giấc ngủ, Điểm số giấc ngủ, Giấc ngủ trưa, Stress, Nhịp thở, Chu kỳ kinh nguyệt, Bài tập thở' },
      { label: 'Tiện ích khác', value: 'Đếm bước chân, Trả lời bằng bàn phím QWERTY, Soạn thảo giọng nói (Android), Gợi ý trả lời AI, Loa & Mic tích hợp, Đồng bộ Strava, TrainingPeaks' },
      { label: 'Hiển thị thông báo', value: 'Line, Messenger, Zalo, Tin nhắn, Cuộc gọi' },
    ],
  },
  {
    category: 'Pin',
    items: [
      { label: 'Dung lượng pin', value: '550 mAh' },
      { label: 'Thời gian sử dụng', value: 'Khoảng 20 ngày (cơ bản) - 7 ngày (bật Always On Display)' },
      { label: 'Thời gian sạc', value: 'Khoảng 2.5 giờ' },
      { label: 'Cổng sạc', value: 'Đế sạc nam châm' },
    ],
  },
  {
    category: 'Cấu hình & Kết nối',
    items: [
      { label: 'CPU', value: 'ZPS3044' },
      { label: 'Bộ nhớ trong', value: '4 GB' },
      { label: 'Hệ điều hành', value: 'Zepp OS' },
      { label: 'Tương thích', value: 'Android 7.0+, iOS 15.0+' },
      { label: 'Ứng dụng', value: 'Zepp App' },
      { label: 'Kết nối', value: 'Bluetooth v5.3, Wi-Fi' },
      { label: 'Cảm biến', value: 'Nhịp tim quang học (PPG), Ánh sáng, Nhiệt độ, Địa từ, Con quay hồi chuyển, Gia tốc kế, Khí áp kế' },
      { label: 'Định vị', value: 'GPS, GLONASS, Galileo, BDS, QZSS' },
    ],
  },
  {
    category: 'Thông tin khác',
    items: [
      { label: 'Hãng', value: 'Amazfit' },
      { label: 'Sản xuất tại', value: 'Trung Quốc' },
      { label: 'Thời gian ra mắt', value: '04/2026' },
      { label: 'Ngôn ngữ', value: 'Tiếng Việt, Tiếng Anh, Tiếng Trung' },
    ],
  },
];

export default function Technologies() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="technologies" className="py-section-tablet md:py-section bg-secondary">
      <div className="max-w-content mx-auto section-padding">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="section-title">THÔNG SỐ</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mt-2">
            Thông số Kỹ thuật
          </h2>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-4">
          {specs.map((spec, i) => (
            <motion.div
              key={spec.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.08 }}
              className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-5 md:p-6 text-left"
              >
                <h3 className="font-heading font-semibold text-white text-lg">
                  {spec.category}
                </h3>
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
                    <div className="px-5 md:px-6 pb-5 md:pb-6 space-y-3">
                      {spec.items.map((item) => (
                        <div key={item.label} className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 py-2 border-b border-white/5 last:border-b-0">
                          <span className="text-white/50 text-sm font-medium min-w-[180px]">{item.label}</span>
                          <span className="text-white/80 text-sm">{item.value}</span>
                        </div>
                      ))}
                    </div>
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
