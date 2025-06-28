import { create } from "zustand";

// Tạo custom hook tên là useProductStore
export const useProductStore = create((set) => ({
  products: [], // Mảng lưu danh sách sản phẩm

  // Hàm để cập nhật toàn bộ danh sách sản phẩm
  setProducts: (products) => set({ products }),

  // Hàm async để tạo sản phẩm mới
  createProduct: async (newProduct) => {
    // Kiểm tra nếu thiếu trường nào thì trả về lỗi
    if (!newProduct.name || !newProduct.image || !newProduct.price) {
      return { success: false, message: "You must provide all fields" };
    }

    // Gửi POST request lên API để tạo sản phẩm
    try {
      const res = await fetch("/api/products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newProduct),
      });

      // Lấy dữ liệu trả về
      const data = await res.json();

      set((state) => ({
        products: [...state.products, data.data],
      }));

      return { success: true, message: "Product created successfully" };
    } catch (error) {}
    return { success: false, message: "Network or server error" };
  },

  fetchProducts: async () => {
    try {
      const res = await fetch("/api/products");
      // Kiểm tra HTTP status code và Content-Type
      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }
      const contentType = res.headers.get("Content-type");
      if (!contentType || !contentType.includes("application/json")) {
        throw new Error(`Response is not JSON`);
      }
      const data = await res.json();
      set({ products: data.data });
    } catch (e) {
      console.error("Failed to fetch products: ", e);
      set({ products: [] }); // fallback để tránh app crash
    }
  },

  deleteProduct: async (pid) => {
    const res = await fetch(`/api/products/${pid}`, { method: "DELETE" });
    const data = await res.json();
    if (!data.success) return { success: false, message: data.message };

    set((state) => ({
      products: state.products.filter((product) => product.id !== pid),
    }));
    return { success: true, message: data.message };
  },
}));
