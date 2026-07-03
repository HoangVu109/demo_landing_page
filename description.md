# Amazfit Bip Max - Landing Page

Landing page giới thiệu đồng hồ thông minh **Amazfit Bip Max**, xây dựng với React 19 + TypeScript + Vite.

## Công nghệ

| Công nghệ | Mục đích |
|-----------|----------|
| React 19 + TypeScript | UI framework |
| Vite 6 | Build tool |
| Tailwind CSS 3.4 | Styling |
| Framer Motion 11 | Animation |
| Lucide React | Icons |
| Poppins + Inter | Fonts (Google Fonts) |

## Cấu trúc

```
LandingPage/
├── public/               # Static assets (vite.svg)
├── imgs/                 # Hình ảnh sản phẩm
│   ├── brand_logo.png    # Logo Amazfit
│   ├── img_1.png         # Ảnh Hero
│   ├── img_2.png         # Ảnh đồng hồ (gọi điện, tin nhắn)
│   ├── img_3.png         # Ảnh nền About
│   └── img_4.png         # Ảnh nền Main Features
├── src/
│   ├── components/
│   │   ├── Navbar.tsx        # Thanh điều hướng sticky
│   │   ├── Hero.tsx          # Hero section
│   │   ├── AboutProduct.tsx  # Giới thiệu sản phẩm
│   │   ├── Technologies.tsx  # Thông số kỹ thuật (accordion 6 mục)
│   │   ├── FeatureCalling.tsx # Tính năng gọi điện
│   │   ├── FeatureMessages.tsx # Tính năng tin nhắn
│   │   ├── MainFeatures.tsx  # 8 tính năng chính
│   │   ├── Reviews.tsx       # Đánh giá khách hàng
│   │   ├── Pricing.tsx       # Bảng giá 2 gói
│   │   ├── FAQ.tsx           # Câu hỏi thường gặp
│   │   ├── Newsletter.tsx    # Đăng ký nhận tin
│   │   ├── Footer.tsx        # Chân trang
│   │   └── ChatWidget.tsx    # Nút chat AI góc phải
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css             # Tailwind + custom styles
├── index.html
├── tailwind.config.js
├── vite.config.ts
├── tsconfig.json
└── package.json
```

## Bố cục trang

1. **Navbar** - Logo + Menu + CTA "Mua ngay"
2. **Hero** - Headline, mô tả, email subscription, 4 feature icons, ảnh sản phẩm
3. **About Product** - Giới thiệu + 5 điểm nổi bật
4. **Thông số Kỹ thuật** - Accordion 6 danh mục: Màn hình, Thiết kế, Tiện ích, Pin, Cấu hình & Kết nối, Thông tin khác
5. **Feature - Calling** - Gọi điện Bluetooth + sóng âm (ảnh img_2)
6. **Feature - Messages** - Tin nhắn floating bubbles (ảnh img_2)
7. **Main Features** - 8 tính năng chính dạng grid, ảnh nền img_4 bên trái
8. **Reviews** - 3 đánh giá khách hàng
9. **Pricing** - 2 gói: Tiêu chuẩn & Cao cấp
10. **FAQ** - 4 câu hỏi accordion
11. **Newsletter** - Form đăng ký (gradient nền)
12. **Footer** - 5 cột + copyright
13. **Chat AI** - Nút tròn góc phải, khung chat với trợ lý ảo

## Màu sắc

| Token | Mã |
|-------|-----|
| Primary | `#2CC7D6` |
| Secondary | `#0F172A` |
| Background | `#FFFFFF` |
| Text | `#1A1A1A` |
| Border | `#E5E7EB` |

## Lệnh

```bash
npm install        # Cài dependencies
npm run dev        # Dev server (localhost:3000)
npm run build      # Build production
npm run preview    # Preview bản build
```

## Responsive

- **Desktop:** 2 cột, grid đầy đủ
- **Tablet:** Giảm spacing, một số section 1 cột
- **Mobile:** Hamburger menu, toàn bộ xếp dọc, CTA full width
