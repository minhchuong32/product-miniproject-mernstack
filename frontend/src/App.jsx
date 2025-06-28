import { Route, Routes } from "react-router-dom";
import { Box } from "@chakra-ui/react";
import HomePage from "./pages/HomePage";
import CreatePage from "./pages/CreatePage";
import UpdatePage from "./pages/UpdatePage";
import Navbar from "./components/Navbar";
import { useProductStore } from "./store/product";
import { Toaster } from "@/components/ui/toaster";

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
