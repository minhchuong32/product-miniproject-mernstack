import { Toaster } from "@/components/ui/toaster";
import { Box } from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import CreatePage from "./pages/CreatePage";
import HomePage from "./pages/HomePage";
import UpdatePage from "./pages/UpdatePage";
import { useProductStore } from "./store/product";

function App() {
  const { products } = useProductStore();
  return (
    <Box minH={"100vh"}>
      <Navbar />
      <Toaster />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create" element={<CreatePage />} />
        <Route path="/update/:id" element={<UpdatePage />} />
      </Routes>
    </Box>
  );
}

export default App;
