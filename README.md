# Mini Product MERN Stack

Ứng dụng quản lý sản phẩm sử dụng MERN Stack (MongoDB, Express, React, Node.js)

## Tính năng

- ✅ Tạo, đọc, cập nhật, xóa sản phẩm (CRUD)
- ✅ Giao diện đẹp với Chakra UI
- ✅ Xác nhận trước khi xóa sản phẩm
- ✅ Responsive design
- ✅ Dark/Light mode
- ✅ Build gộp frontend và backend

## Cấu trúc dự án

```
mini-product-MERNstack/
├── frontend/                 # React app (Vite + TypeScript)
│   ├── src/
│   │   ├── components/       # React components
│   │   ├── pages/           # Page components
│   │   ├── store/           # Zustand store
│   │   └── ...
│   ├── dist/                # Build output (sau khi build)
│   └── package.json
├── backend/                  # Express server
│   ├── controllers/         # API controllers
│   ├── models/             # MongoDB models
│   ├── routes/             # API routes
│   ├── config/             # Database config
│   └── server.js           # Main server file
├── package.json             # Root package.json
└── README.md
```

## Yêu cầu hệ thống

- Node.js (version 16 trở lên)
- npm hoặc yarn
- MongoDB Atlas (hoặc MongoDB local)

## Cài đặt và Chạy

### Bước 1: Clone và cài đặt dependencies

```bash
# Clone repository (nếu chưa có)
git clone <repository-url>
cd mini-product-MERNstack

# Cài đặt dependencies cho frontend
cd frontend
npm install --legacy-peer-deps
cd ..

# Cài đặt dependencies cho backend
cd backend
npm install
cd ..
```

### Bước 2: Cấu hình MongoDB

Tạo file `.env` trong thư mục `backend`:

```env
MONGODB_URI=mongodb+srv://<username>:<password>@<cluster-url>/<database>?retryWrites=true&w=majority
PORT=5000
```

**Lưu ý:** Thay thế `<username>`, `<password>`, `<cluster-url>`, `<database>` bằng thông tin MongoDB Atlas của bạn.

### Bước 3: Build Frontend

```bash
cd frontend
npm run build
cd ..
```

Sau khi build thành công, thư mục `frontend/dist` sẽ được tạo với các file static.

### Bước 4: Chạy Backend (serve cả frontend và backend)

```bash
cd backend
npm start
```

### Bước 5: Truy cập ứng dụng

- **Frontend**: http://localhost:5000
- **API Endpoints**: http://localhost:5000/api/products

## Scripts có sẵn

### Root level (mini-product-MERNstack/)

```bash
npm run install:all          # Cài đặt dependencies cho cả frontend và backend
npm run build               # Build frontend
npm run start               # Chạy backend
npm run build:and:start     # Build frontend và chạy backend
npm run setup               # Cài đặt và chạy hoàn chỉnh
```

### Frontend (frontend/)

```bash
npm install --legacy-peer-deps  # Cài đặt dependencies
npm run dev                     # Chạy development server (port 5173)
npm run build                   # Build production
npm run preview                 # Preview build
```

### Backend (backend/)

```bash
npm install                    # Cài đặt dependencies
npm start                      # Chạy production server
npm run dev                    # Chạy development server với nodemon
```

## API Endpoints

| Method | Endpoint            | Description         |
| ------ | ------------------- | ------------------- |
| GET    | `/api/products`     | Lấy tất cả sản phẩm |
| POST   | `/api/products`     | Tạo sản phẩm mới    |
| PUT    | `/api/products/:id` | Cập nhật sản phẩm   |
| DELETE | `/api/products/:id` | Xóa sản phẩm        |

## Cách hoạt động

1. **Development**: Frontend chạy trên port 5173, backend chạy trên port 5000
2. **Production**: Cả frontend và backend chạy chung trên port 5000
3. **Static Files**: Backend serve các file static từ `frontend/dist`
4. **API Proxy**: Frontend proxy API calls đến backend trong development

## Troubleshooting

### Lỗi "ENOENT: no such file or directory"

- Đảm bảo đã build frontend: `cd frontend && npm run build`
- Kiểm tra file `frontend/dist/index.html` tồn tại

### Lỗi MongoDB connection

- Kiểm tra file `.env` có đúng MONGODB_URI
- Đảm bảo MongoDB Atlas IP whitelist đã thêm IP của bạn

### Lỗi dependency conflicts

- Sử dụng `--legacy-peer-deps` khi cài đặt frontend dependencies

### Lỗi port đã được sử dụng

- Thay đổi PORT trong file `.env`
- Hoặc kill process đang sử dụng port 5000

## Deploy

### Render.com

1. Connect repository
2. Build Command: `cd frontend && npm install --legacy-peer-deps && npm run build`
3. Start Command: `cd backend && npm install && npm start`
4. Environment Variables: Thêm `MONGODB_URI`

### Heroku

1. Deploy backend
2. Build frontend và copy `dist` vào backend
3. Set environment variables

### VPS

1. Upload toàn bộ code
2. Cài đặt Node.js và MongoDB
3. Build frontend: `npm run build`
4. Chạy backend: `npm start`

## Contributing

1. Fork repository
2. Tạo feature branch
3. Commit changes
4. Push to branch
5. Tạo Pull Request

## License

MIT License
