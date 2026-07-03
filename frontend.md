# SmartWatch Landing Page Specification (Frontend)

## Công nghệ sử dụng

- **Framework:** React 19 + TypeScript
- **Build Tool:** Vite
- **Styling:** Tailwind CSS
- **Icons:** Lucide React
- **Animation:** Framer Motion
- **Routing:** React Router DOM (nếu cần)
- **UI Components:** shadcn/ui
- **Font:** Poppins (Heading), Inter (Body)
- **Responsive:** Mobile First
- **Image Optimization:** Vite Assets
- **Code Quality:** ESLint + Prettier

---

# Tổng quan

Thiết kế landing page hiện đại theo phong cách Minimalism để giới thiệu sản phẩm **NovaWatch X1**.

## Màu sắc

- Primary: `#2CC7D6`
- Secondary: `#0F172A`
- Background: `#FFFFFF`
- Text: `#1A1A1A`
- Border: `#E5E7EB`

## Bố cục tổng thể

1. Navbar
2. Hero Section
3. About Product
4. Technologies
5. Feature Showcase - Calling
6. Feature Showcase - Messages
7. Main Features
8. Customer Reviews
9. Pricing
10. FAQ
11. Newsletter
12. Footer

Content Width: **1200px**

Padding:
- Desktop: 80px
- Tablet: 40px
- Mobile: 20px

---

# 1. Navbar

- Chiều cao: 80px
- Sticky khi cuộn
- Logo bên trái
- Menu:
  - Home
  - Product
  - Features
  - Specifications
  - Reviews
  - Contact
- CTA: **Buy Now**

Hover:
- Menu đổi màu Primary
- Button scale 1.05

---

# 2. Hero Section

Chiều cao khoảng 850px.

## Layout

- Trái (45%)
  - Headline
  - Description
  - Email Subscription
  - 4 Feature Icons
- Phải (55%)
  - Hình sản phẩm lớn
  - Background gradient
  - Chữ watermark "PRODUCT"

Headline:

> Meet the Future of Smart Living

Description giới thiệu NovaWatch X1 là đồng hồ thông minh cao cấp hỗ trợ theo dõi sức khỏe, giao tiếp và năng suất làm việc.

Feature Icons:

- AMOLED Display
- 7 Days Battery
- 5ATM Waterproof
- Bluetooth 5.4

---

# 3. About Product

Bố cục 2 cột.

## Trái

- Tiêu đề ABOUT
- Heading "The Product"
- Mô tả:
  - Khung nhôm nguyên khối
  - Màn AMOLED
  - AI Health Tracking
  - GPS kép
  - Sạc nhanh

Có watermark "BE ACTIVE".

## Phải

Ảnh smartwatch nhìn ngang.

---

# 4. Technologies

Background Dark Navy.

Grid 4 cột × 2 hàng.

8 Technology Cards:

- Productivity
- High Quality
- Battery
- Protection
- Design
- Support
- Sensors
- Easy to Use

Hover:
- translateY(-8px)

---

# 5. Feature Showcase - Calling

Layout:

Text | Watch

Nội dung:

- Bluetooth Calling
- Noise Cancellation
- Speaker
- Microphone

Button:
Explore

Ảnh có hiệu ứng sóng âm.

---

# 6. Feature Showcase - Messages

Layout đảo ngược.

Watch | Text

Hiển thị các bubble:

- WhatsApp
- SMS
- Email
- Telegram

---

# 7. Main Features

Layout:

Watch | Grid tính năng

Grid gồm 8 tính năng:

- Health Tracking
- 100+ Sports Modes
- GPS Navigation
- NFC Payment
- Music Control
- Camera Control
- Find My Phone
- Custom Watch Faces

Hover đổi màu viền sang Primary.

---

# 8. Customer Reviews

3 Review Cards.

Mỗi card:

- Avatar
- Tên
- Rating 5 sao
- Nội dung đánh giá

---

# 9. Pricing

Hai gói:

## Standard

- Watch
- Charger

## Premium

- Watch
- Wireless Charger
- Leather Strap
- 2-Year Warranty

Badge:
BEST VALUE

---

# 10. FAQ

Accordion gồm:

- Battery
- Swimming
- Android/iPhone
- Warranty

---

# 11. Newsletter

Gradient Cyan.

- Heading
- Description
- Email Input
- Subscribe Button

---

# 12. Footer

5 cột:

- Logo
- Product
- Support
- Company
- Newsletter

Cuối trang:

© 2026 NovaWatch

Privacy Policy • Terms • Cookies

---

# Hiệu ứng

- Sticky Navbar
- Smooth Scroll
- Hero Floating Animation
- Fade In khi scroll
- Hover Card
- Hover Button
- Accordion Animation

---

# Responsive

## Desktop

- 2 cột
- Grid đầy đủ

## Tablet

- Giảm spacing
- Một số section chuyển 1 cột

## Mobile

- Hamburger Menu
- Toàn bộ section xếp dọc
- Grid chuyển 1 cột
- CTA full width
