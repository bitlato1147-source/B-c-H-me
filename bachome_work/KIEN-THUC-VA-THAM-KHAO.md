# Đối chiếu kiến thức và tài liệu tham khảo — Bạc Hôme

Tài liệu này giúp giải thích website theo những slide môn Thiết kế Web đã cung cấp và phân biệt rõ nội dung JavaScript được dùng trong dự án với nội dung có thể xác nhận từ slide.

## 1. HTML — Seminar 2

- Cấu trúc tài liệu: `<!doctype html>`, `html`, `head`, `body`.
- Các phần tử ngữ nghĩa đang dùng: `header`, `nav`, `main`, `section`, `article`, `footer`.
- Nội dung văn bản: `h1`, `h2`, `h3`, `p`, `strong`.
- Liên kết và hình ảnh: `a`, `img` với thuộc tính `href`, `src`, `alt`.
- Phần tử tương tác: `button`, `input`.
- `details` và `summary` được dùng trong phần câu hỏi thường gặp.

## 2. CSS — Seminar 3

- CSS nằm trong tệp ngoài `style.css`, liên kết bằng `<link rel="stylesheet">`; đây là cách External CSS trong slide.
- Selector theo phần tử, class và ID được dùng để chọn vùng cần định dạng.
- Pseudo-class như `:hover` được dùng cho trạng thái tương tác bằng chuột.
- Các quy tắc bố cục và định dạng tập trung trong CSS thay vì gắn trực tiếp vào từng thẻ HTML.

## 3. Bố cục đáp ứng — Seminar 4

- Website có thẻ viewport để trình duyệt hiển thị phù hợp với thiết bị.
- `@media` và các điều kiện theo chiều rộng màn hình được dùng để điều chỉnh bố cục trên màn hình nhỏ.
- Hãy thử thay đổi kích thước cửa sổ trình duyệt để kiểm tra menu và các lưới nội dung.

## 4. JavaScript được dùng trong dự án

Các slide Seminar 2–4 được cung cấp chủ yếu nói về HTML, CSS và Media Query; chúng không đủ để xác nhận toàn bộ kiến thức JavaScript dưới đây đã được dạy trên lớp. Danh mục sách ở cuối file là tài liệu tham khảo cho JavaScript, không phải bằng chứng rằng từng kỹ thuật đã được học.

| Mã/khái niệm | Vai trò trong website | Cách giải thích ngắn |
|---|---|---|
| `addEventListener` | Lắng nghe sự kiện click hoặc nhập liệu | Khi người dùng thao tác, hàm xử lý được gọi. |
| `querySelector` | Tìm phần tử HTML | Chọn phần tử theo selector CSS. |
| `function` | Gom nhóm lệnh | Cho phép gọi lại một khối xử lý khi cần. |
| `if` | Rẽ nhánh điều kiện | Chọn cách xử lý dựa trên điều kiện. |
| `filter` và `includes` | Tìm cổ vật theo từ khóa | Giữ lại các mục có tên/triều đại/thời kỳ phù hợp. |
| `fetch` và `response.json()` | Đọc dữ liệu từ `artifacts.json` | Tải dữ liệu JSON để tạo danh sách cổ vật. Cần chạy bằng máy chủ phát triển như Live Server. |
| `localStorage` | Ghi nhớ trạng thái mở khóa thử nghiệm | Dữ liệu lưu trong trình duyệt trên thiết bị hiện tại; không phải cơ sở dữ liệu dùng chung. |
| `URLSearchParams` | Đọc `id` từ URL | Chọn cổ vật cần hiển thị ở trang chi tiết. |
| `innerHTML` | Hiển thị nội dung tạo từ dữ liệu | JavaScript chèn phần đánh dấu HTML vào vùng hiển thị. Chỉ dùng với dữ liệu đáng tin cậy trong bản demo. |
| `async/await` | Chờ dữ liệu tải xong | Giúp viết luồng đọc dữ liệu bất đồng bộ dễ theo dõi hơn. |

## 5. Tài liệu tham khảo JavaScript do người học cung cấp

1. Jennifer Robbins (2018), *Learning Web Design: A Beginner's Guide to HTML, CSS, JavaScript, and Web Graphics*, O'Reilly Media.
2. David Flanagan (2020), *JavaScript: The Definitive Guide: Master the World's Most-Used Programming Language*, O'Reilly Media.
3. Matt Frisbie (2020), *Professional JavaScript for Web Developers*, 4th Edition, Wrox.

## 6. Câu hỏi nên tự luyện trước khi bảo vệ

1. `header`, `nav`, `main`, `section` và `footer` khác nhau về vai trò như thế nào?
2. Vì sao dự án liên kết `style.css` bằng thẻ `link` thay vì viết toàn bộ CSS inline?
3. Selector `.class`, `#id` và selector theo tên phần tử khác nhau thế nào?
4. `:hover` hoạt động khi nào? `@media` có tác dụng gì?
5. `addEventListener('click', ...)` thực hiện nhiệm vụ gì?
6. Vì sao cần `Live Server` khi trang đọc `artifacts.json` bằng `fetch`?
7. `localStorage` lưu ở đâu và có đồng bộ giữa các thiết bị không?
8. Tính năng nào trong website hiện là mô phỏng, chưa phải dịch vụ thực tế?
