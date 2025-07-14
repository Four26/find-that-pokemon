import { useState } from "react";
import { useNavigate } from "react-router";
import { useStore } from "../store/store";
import { addToLeaderBoard } from "../services/addToLeaderBoard";
import { formatTime } from "./formatTime";

const LeaderboardModal = () => {
    const { timer, isGameOver, resetTimer } = useStore();
    const navigate = useNavigate();
    const [name, setName] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (name.trim()) {
            addToLeaderBoard({ name, time: timer });
            resetTimer();
            navigate('/leaderboard')
        }
    };


    if (!isGameOver) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-lg max-w-md w-full">
                <h2 className="text-2xl font-bold mb-4">Congratulations!</h2>
                <p className="mb-4">You found all Pokémon in {formatTime(timer)}!</p>

                <form onSubmit={handleSubmit} className="mb-4">
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Enter your name"
                        className="w-full p-2 border rounded mb-2"
                        required
                    />
                    <button
                        type="submit"
                        className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded"
                    >
                        Submit to Leaderboard
                    </button>
                </form>
            </div>
        </div>
    );
};

export default LeaderboardModal;