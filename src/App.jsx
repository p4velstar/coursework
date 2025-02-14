import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/Header/Header.jsx";
import HomeMain from "./Components/HomeMain/HomeMain.jsx";

export default function App() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<HomeMain />} />
            </Routes>
        </BrowserRouter>
    );
}