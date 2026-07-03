import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, Bot } from 'lucide-react';

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: 'user' | 'ai'; text: string }[]>([
    { role: 'ai', text: 'Chào bạn! Tôi là trợ lý AI của Amazfit. Tôi có thể giúp gì cho bạn về Bip Max?' },
  ]);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSend = () => {
    if (!input.trim()) return;

    const userMsg = input.trim();
    setMessages((prev) => [...prev, { role: 'user', text: userMsg }]);
    setInput('');

    // Giả lập AI trả lời
    setTimeout(() => {
      const aiReply = getAiReply(userMsg);
      setMessages((prev) => [...prev, { role: 'ai', text: aiReply }]);
    }, 800);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') handleSend();
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.25 }}
            className="mb-4 w-[350px] max-w-[calc(100vw-48px)] bg-white dark:bg-gray-900 rounded-2xl shadow-2xl dark:shadow-gray-950/50 border border-border dark:border-gray-700 overflow-hidden"
          >
            {/* Header */}
            <div className="bg-primary px-5 py-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center">
                  <Bot size={20} className="text-white" />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-white text-sm">Trợ lý Amazfit</h3>
                  <p className="text-white/70 text-xs">Trực tuyến</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white/80 hover:text-white transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            {/* Messages */}
            <div className="h-80 overflow-y-auto p-4 space-y-3 bg-gray-50 dark:bg-gray-800">
              {messages.map((msg, i) => (
                <div
                  key={i}
                  className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[85%] px-4 py-2.5 rounded-2xl text-sm leading-relaxed ${
                      msg.role === 'user'
                        ? 'bg-primary text-white rounded-br-md'
                        : 'bg-white dark:bg-gray-700 text-text/80 dark:text-gray-200 border border-border dark:border-gray-600 rounded-bl-md shadow-sm'
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-3 border-t border-border dark:border-gray-700 bg-white dark:bg-gray-900 flex items-center gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Nhập tin nhắn..."
                className="flex-1 px-4 py-2 text-sm rounded-full border border-border dark:border-gray-600 bg-white dark:bg-gray-800 dark:text-white focus:outline-none focus:border-primary transition-colors"
              />
              <button
                onClick={handleSend}
                disabled={!input.trim()}
                className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center hover:scale-105 transition-transform disabled:opacity-50 disabled:hover:scale-100"
              >
                <Send size={16} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toggle Button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className={`w-14 h-14 rounded-full shadow-lg flex items-center justify-center transition-colors ${
          isOpen ? 'bg-secondary text-white' : 'bg-primary text-white'
        }`}
      >
        {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
      </motion.button>
    </div>
  );
}

function getAiReply(msg: string): string {
  const lower = msg.toLowerCase();

  if (lower.includes('pin') || lower.includes('battery')) {
    return 'Amazfit Bip Max có pin 550 mAh, dùng được đến 20 ngày ở chế độ cơ bản và 7 ngày khi bật Always On Display. Sạc đầy mất khoảng 2.5 giờ qua đế sạc nam châm.';
  }
  if (lower.includes('giá') || lower.includes('price') || lower.includes('mua')) {
    return 'Bip Max có 2 gói: Tiêu chuẩn ($299) và Cao cấp ($399). Gói Cao cấp có thêm dây da, dây silicone và bảo hành 2 năm. Bạn muốn đặt mua không?';
  }
  if (lower.includes('màn hình') || lower.includes('display') || lower.includes('amoled')) {
    return 'Bip Max sở hữu màn hình AMOLED 2.07 inch, độ phân giải 432×514 pixel, kích thước mặt 49.5 mm, hiển thị sắc nét và sống động.';
  }
  if (lower.includes('nước') || lower.includes('bơi') || lower.includes('swim')) {
    return 'Bip Max đạt chuẩn chống nước 5 ATM (ISO 22810:2010), bạn có thể đeo khi tắm và bơi ở vùng nước nông thoải mái nhé!';
  }
  if (lower.includes('gps') || lower.includes('định vị')) {
    return 'Bip Max hỗ trợ 5 hệ thống định vị: GPS, GLONASS, Galileo, BDS và QZSS, cho định vị chính xác trong mọi hoạt động ngoài trời.';
  }
  if (lower.includes('sức khỏe') || lower.includes('health') || lower.includes('spo2')) {
    return 'Bip Max theo dõi sức khỏe toàn diện: nhịp tim, SpO₂, nhiệt độ da, giấc ngủ, stress, nhịp thở và nhiều chỉ số khác.';
  }
  if (lower.includes('cảm ơn') || lower.includes('thanks') || lower.includes('thank')) {
    return 'Không có gì ạ! Nếu bạn cần thêm thông tin gì về Bip Max, cứ hỏi tôi nhé. 😊';
  }
  if (lower.includes('chào') || lower.includes('hello') || lower.includes('hi')) {
    return 'Chào bạn! Tôi có thể giúp gì về Amazfit Bip Max? Bạn có thể hỏi về pin, màn hình, giá cả, tính năng sức khỏe...';
  }

  return 'Cảm ơn bạn đã quan tâm! Để biết thêm chi tiết về Bip Max, bạn có thể hỏi tôi về: pin, màn hình, giá cả, chống nước, GPS, sức khỏe, hoặc liên hệ qua email để được tư vấn trực tiếp.';
}
