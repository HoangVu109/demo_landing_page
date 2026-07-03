import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const plans = [
  {
    name: 'Tiêu chuẩn',
    price: '2.590.000₫',
    features: ['Amazfit Bip Max', 'Đế sạc từ tính', 'Dây silicone', 'Bảo hành 1 năm'],
    highlighted: false,
  },
  {
    name: 'Cao cấp',
    price: '3.190.000₫',
    features: [
      'Amazfit Bip Max',
      'Đế sạc từ tính',
      'Dây silicone + Dây da',
      'Bảo hành 2 năm',
    ],
    highlighted: true,
  },
];

export default function Pricing() {
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
          <span className="section-title">BẢNG GIÁ</span>
          <h2 className="section-heading">Chọn Gói của Bạn</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className={`relative rounded-2xl p-8 ${
                plan.highlighted
                  ? 'bg-secondary text-white border-2 border-primary shadow-xl shadow-primary/20 scale-105'
                  : 'bg-white border-2 border-border shadow-sm'
              }`}
            >

              <h3
                className={`font-heading font-bold text-2xl mb-2 ${
                  plan.highlighted ? 'text-white' : 'text-secondary'
                }`}
              >
                {plan.name}
              </h3>

              <div className="mb-6">
                <span
                  className={`text-4xl font-heading font-extrabold ${
                    plan.highlighted ? 'text-primary' : 'text-secondary'
                  }`}
                >
                  {plan.price}
                </span>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-3">
                    <div
                      className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${
                        plan.highlighted ? 'bg-primary/30' : 'bg-primary/10'
                      }`}
                    >
                      <Check
                        size={12}
                        className={plan.highlighted ? 'text-primary' : 'text-primary'}
                      />
                    </div>
                    <span className={plan.highlighted ? 'text-white/80' : 'text-text/60'}>
                      {f}
                    </span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-3 rounded-full font-semibold transition-all duration-300 ${
                  plan.highlighted
                    ? 'bg-primary text-white hover:scale-105'
                    : 'btn-outline'
                }`}
              >
                Mua ngay
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
