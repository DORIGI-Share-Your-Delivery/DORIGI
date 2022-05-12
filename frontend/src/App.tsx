import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { createTheme, ThemeProvider } from "@mui/material/styles";

import Main from "./Pages/Main";
import Board from "./Pages/Board";
import Restaurant from "./Pages/Restaurant";
import Chatting from "./Pages/Chatting";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Login from "./Pages/Login";
import Search from "./Pages/Search";

const theme = createTheme();

//section data type -> interface
interface section {
    title: string;
    url: string;
}

const sections: section[] = [
    { title: "게시판", url: "/board" },
    { title: "채팅", url: "/chat" },
    { title: "맛집지도", url: "/restaurant" },
];

function App() {
    return (
        <Router>
            <div className="App">
                <ThemeProvider theme={theme}>
                    <Header sections={sections} />
                    <Routes>
                        <Route path="/" element={<Main />} />
                        <Route path="/board" element={<Board />} />
                        <Route path="/chat" element={<Chatting />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/restaurant" element={<Restaurant />} />
                        <Route path="/search" element={<Search />} />
                    </Routes>
                    <Footer
                        title={"title"}
                        description={"@DORIGI, Inc. 2022. 2022-DORIGI-TeamI"}
                    />
                </ThemeProvider>
            </div>
        </Router>
    );
}

export default App;
