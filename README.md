# Amazfit Bip Max - Landing Page

Landing page giới thiệu đồng hồ thông minh **Amazfit Bip Max**, xây dựng với React 19 + TypeScript + Vite.

> 📱 **Sản phẩm & Thông tin tham khảo:** [Amazfit Bip Max tại Thế Giới Di Động](https://www.thegioididong.com/dong-ho-thong-minh/amazfit-bip-max-49-5mm-day-silicone)

## Công nghệ

| Công nghệ | Mục đích |
|-----------|----------|
| React 19 + TypeScript | UI framework |
| Vite 6 | Build tool |
| Tailwind CSS 3.4 | Styling |
| Framer Motion 11 | Animation |
| Lucide React | Icons |
| Google Sans Flex + Inter | Fonts (Google Fonts) |

## Cách khởi chạy

```bash
npm install        # Cài dependencies
npm run dev        # Dev server → http://localhost:3000
npm run build      # Build production → dist/
npm run preview    # Preview bản build
```

## Cấu trúc

```
LandingPage/
├── imgs/                 
├── src/
│   ├── components/
│   │   ├── Navbar.tsx         # Thanh điều hướng sticky
│   │   ├── Hero.tsx           # Hero section
│   │   ├── AboutProduct.tsx   # Giới thiệu sản phẩm
│   │   ├── Technologies.tsx   # Thông số kỹ thuật 
│   │   ├── FeatureCalling.tsx  # Gọi điện Bluetooth 
│   │   ├── FeatureMessages.tsx # Tin nhắn SMS/Messenger/Zalo/LINE
│   │   ├── MainFeatures.tsx   # 8 tính năng chính
│   │   ├── Reviews.tsx        # Đánh giá khách hàng
│   │   ├── Pricing.tsx        # Bảng giá 2 gói
│   │   ├── FAQ.tsx            # Câu hỏi thường gặp
│   │   ├── Newsletter.tsx     # Đăng ký nhận tin
│   │   ├── Footer.tsx         # Chân trang 5 cột
│   │   └── ChatWidget.tsx     # Chat AI góc phải
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css              # Tailwind + custom styles
├── index.html
├── tailwind.config.js         # Màu #2CC7D6, font Google Sans Flex
├── vite.config.ts             # Port 3000, @ alias
└── package.json
```

## Bố cục trang

| # | Section | Mô tả |
|---|---------|-------|
| 1 | **Navbar** | Logo + Menu (Trang chủ, Sản phẩm, Tính năng, Thông số, Đánh giá, Liên hệ) + CTA "Mua ngay" |
| 2 | **Hero** | Headline, mô tả, email subscription, 4 icons (AMOLED, Pin 20 ngày, 5ATM, Bluetooth 5.3), ảnh img_1 |
| 3 | **About Product** | Giới thiệu + 5 điểm nổi bật, ảnh nền img_3 nhạt dần về trái |
| 4 | **Thông số Kỹ thuật** | Accordion 6 danh mục: Màn hình, Thiết kế, Tiện ích, Pin, Cấu hình & Kết nối, Thông tin khác |
| 5 | **Gọi điện** | Bluetooth Calling, chống ồn, loa, mic + sóng âm (ảnh img_2) |
| 6 | **Tin nhắn** | SMS, Messenger, Zalo, LINE dạng floating bubbles (ảnh img_2) |
| 7 | **Tính năng chính** | Grid 8 tính năng + ảnh đồng hồ img_5 |
| 8 | **Đánh giá** | 3 review cards (Thanh Hằng, Minh Tuấn, Thảo Nguyên) |
| 9 | **Bảng giá** | 2 gói: Tiêu chuẩn (2.590.000₫) & Cao cấp (3.190.000₫) |
| 10 | **FAQ** | 4 câu hỏi accordion: Pin, Bơi, Tương thích, Bảo hành |
| 11 | **Newsletter** | Form đăng ký nhận tin (gradient #2CC7D6) |
| 12 | **Footer** | 5 cột (Sản phẩm, Hỗ trợ, Công ty, Bản tin) + copyright |
| 13 | **Chat AI** | Nút tròn góc phải, khung chat trợ lý ảo |

## Màu sắc

| Token | Mã |
|-------|-----|
| Primary | `#2CC7D6` |
| Secondary | `#0F172A` |
| Background | `#FFFFFF` |
| Text | `#1A1A1A` |
| Border | `#E5E7EB` |

## Responsive

- **Desktop:** 2 cột, grid đầy đủ
- **Tablet:** Giảm spacing, một số section 1 cột
- **Mobile:** Hamburger menu, toàn bộ xếp dọc, CTA full width
