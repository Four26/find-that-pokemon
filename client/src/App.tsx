import MainLayout from "./layout/MainLayout";
import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import Game from "./pages/Game";
import Leaderboard from "./pages/Leaderboard";
function App() {

    return (
        <Routes>
            <Route path="/" element={<MainLayout />}>
                <Route index element={<Home />} />
                <Route path="/game" element={<Game />} />
                <Route path="/leaderboard" element={<Leaderboard />} />
            </Route>
        </Routes>
    )
}

export default App;
