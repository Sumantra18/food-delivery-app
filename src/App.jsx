import { BrowserRouter, Route, Routes } from "react-router-dom";
import Loginsignup from "./Components/Loginsignup";
import Home from "./Components/Home";
import Login from "./Components/Login";
import Register from "./Components/Register";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "./Components/Header";
import { CreateContainer, MainContainer } from "./Components";
import { AnimatePresence } from "framer-motion";

function App() {
  return (
    <AnimatePresence>
      <div className="w-screen h-auto flex flex-col bg-slate-50">
        <Header />

        <main className="mt-24 p-8 w-full">
          <Routes>
            <Route path="/*" element={<MainContainer />} />
            <Route path="/createItem*" element={<CreateContainer />} />
          </Routes>
        </main>
      </div>
    </AnimatePresence>
  );
}

export default App;
