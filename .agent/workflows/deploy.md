---
description: Commit và đẩy code lên GitHub, tùy chọn đánh tag version
---

# Deploy to GitHub

Quy trình cập nhật code lên GitHub repository.

## Bước thực hiện

1. Kiểm tra trạng thái file thay đổi:
// turbo
```bash
git status --short
```

2. Stage tất cả file đã thay đổi:
// turbo
```bash
git add -A
```

3. Commit với message mô tả rõ ràng những gì đã thay đổi. Tự tạo commit message dựa trên các file thay đổi:
// turbo
```bash
git commit -m "<mô tả ngắn gọn về thay đổi>"
```

4. Push lên GitHub:
// turbo
```bash
git push
```

5. Nếu USER yêu cầu đánh version (tag), tạo tag theo semantic versioning:
```bash
git tag -a v<X.Y.Z> -m "<mô tả version>"
git push origin v<X.Y.Z>
```

## Quy tắc đặt tên version (Semantic Versioning)

- **v1.0.0** → Version đầu tiên hoàn chỉnh
- **vX.Y.Z** trong đó:
  - **X** (major): Thay đổi lớn, không tương thích ngược (ví dụ: redesign toàn bộ)
  - **Y** (minor): Thêm tính năng mới nhưng vẫn tương thích (ví dụ: thêm trang mới)
  - **Z** (patch): Sửa lỗi nhỏ (ví dụ: sửa CSS, fix bug)

## Ví dụ commit message tốt

- "Thêm trang Giới thiệu và cập nhật navigation"
- "Sửa lỗi responsive trên mobile cho ServicesSection"
- "Cập nhật thông tin liên hệ và thêm Google Maps"
- "Tối ưu hiệu suất tải ảnh và lazy loading"
