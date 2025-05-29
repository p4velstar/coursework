import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeMain from "./Components/HomeMain/HomeMain.jsx";
import Header from "./Components/Header/Header.jsx";
import Registration from "./Components/Registration/Registration.jsx";
import Login from "./Components/Login/Login.jsx";

export default function App() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<HomeMain />} />
                <Route path="/login" element={<Login />} />
                <Route path="/registration" element={<Registration />} />
            </Routes>
            <Registration />
        </BrowserRouter>
    );
}