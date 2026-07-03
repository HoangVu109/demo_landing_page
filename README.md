# Amazfit Bip Max - Landing Page

Landing page giới thiệu đồng hồ thông minh **Amazfit Bip Max**, xây dựng với React 19 + TypeScript + Vite.

>  **Sản phẩm & Thông tin tham khảo:** [Amazfit Bip Max tại Thế Giới Di Động](https://www.thegioididong.com/dong-ho-thong-minh/amazfit-bip-max-49-5mm-day-silicone)

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
| 1 | **Navbar** | Logo + Menu |
| 2 | **Hero** | Headline, mô tả, email subscription |
| 3 | **About Product** | Giới thiệu |
| 4 | **Thông số Kỹ thuật** | Mô tả thông số kỹ thuật của sản phẩm |
| 5 | **Gọi điện** | Bluetooth Calling, chống ồn, loa, mic + sóng âm |
| 6 | **Tin nhắn** | SMS, Messenger, Zalo, LINE dạng floating bubbles |
| 7 | **Tính năng chính** | Mô tả các chức năng |
| 8 | **Đánh giá** | review của khách hàng |
| 9 | **Bảng giá** | Mức giá bán sản phẩm |
| 10 | **FAQ** | Câu hỏi thường gặp |
| 11 | **Newsletter** | Form đăng ký nhận tin  |
| 12 | **Footer** |  |
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
