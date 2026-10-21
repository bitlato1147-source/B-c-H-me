# Bạc Hôme — Website HTML, CSS và JavaScript

## 1. Mở website
1. Giải nén file ZIP.
2. Mở thư mục dự án bằng Visual Studio Code hoặc trình soạn thảo tương tự.
3. Chạy `index.html` bằng Live Server (khuyến nghị), vì trang bộ sưu tập đọc dữ liệu từ `artifacts.json` bằng `fetch`.
4. Trên website, mở **Bộ sưu tập** để thử tìm kiếm và mở khóa cổ vật.

## 2. Các tệp chính
- `index.html`: Trang chủ doanh nghiệp Bạc Hôme và dự án CHẠM Sử.
- `bo-suu-tap/index.html`: Danh sách cổ vật, ô tìm kiếm và nút mở khóa thử nghiệm.
- `co-vat/index.html`: Trang chi tiết cổ vật; ID được truyền qua địa chỉ URL.
- `huong-dan/index.html`: Hướng dẫn trải nghiệm.
- `style.css`: Quy tắc định dạng và bố cục dùng chung.
- `script.js`: Menu điện thoại, hiển thị danh sách, tìm kiếm, lưu trạng thái mở khóa.
- `artifacts.json`: Dữ liệu cổ vật.
- `assets/`: Logo, hình ảnh, font và tài nguyên của website.
- `KIEN-THUC-VA-THAM-KHAO.md`: Bảng đối chiếu kiến thức đã học và tài liệu tham khảo JavaScript.

## 3. Lưu ý về chức năng
Đây là website frontend phục vụ trình diễn. Nút “Mở khóa” chỉ lưu trạng thái trên trình duyệt hiện tại; nó không xác thực quyền sở hữu cổ vật. Website chưa có máy chủ, tài khoản người dùng, thanh toán, gửi biểu mẫu đến doanh nghiệp, NFC thật hay AR thật. Các phần giới thiệu NFC/3D/AR mô tả định hướng trải nghiệm, không có nghĩa các công nghệ này đã được tích hợp đầy đủ.

## 4. Cách học và trình bày
Trước khi bảo vệ, hãy mở `KIEN-THUC-VA-THAM-KHAO.md`, sau đó tự giải thích được: HTML tạo cấu trúc gì; CSS nào định dạng khu vực đó; JavaScript lắng nghe sự kiện nào và thay đổi nội dung ra sao. Những nội dung như `fetch`, `async/await`, arrow function, template literal, `localStorage` và `URLSearchParams` nên được trình bày là kiến thức JavaScript dùng trong dự án, không khẳng định đã nằm trong Seminar 2–4 nếu slide không đề cập.
