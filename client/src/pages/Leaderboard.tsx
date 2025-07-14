import { useCallback, useEffect, useState } from "react"
import type { LeaderboardData } from "../types/types"
import { getLeaderBoard } from "../services/getLeaderBoard";
import { formatTime } from "../components/formatTime";
import { Link } from "react-router";
import { useStore } from "../store/store";

const Leaderboard = () => {
    const [leaderboard, setLeaderboard] = useState<LeaderboardData[]>([]);
    const { resetGame } = useStore();

    const fetchLeaderboard = useCallback(async () => {
        const data = await getLeaderBoard();
        setLeaderboard(data.data)
    }, []);
    useEffect(() => {
        fetchLeaderboard();
    }, [fetchLeaderboard]);

    return (
        <div className="flex-1 px-10 py-5 sm:p-5 flex flex-col">
            <Link to="/game" onClick={resetGame} className="text-blue-500 font-raleway text-xs">&#8592; Go back</Link>
            <div className="px-4 py-6 mt-10 border border-gray-200 rounded-lg shadow-xl max-w-[320px] h-auto mx-auto bg-white overflow-hidden">
                <h1 className="font-raleway text-center text-3xl font-bold text-gray-800 pb-3 mb-4 border-b-2 border-indigo-500 max-w-xs mx-auto">
                    Leaderboards
                </h1>

                {leaderboard.length === 0 ? (
                    <p className="text-center text-gray-500 mt-8">No scores yet. Be the first!</p>
                ) : (
                    <div className="space-y-3">
                        {leaderboard.map((item, index) => (
                            <div
                                key={item.id}
                                className={`flex justify-between items-center py-2 px-3 rounded-md transition duration-200 ease-in-out
            ${index === 0 ? 'bg-yellow-100 border border-yellow-300 shadow-md' :
                                        index === 1 ? 'bg-gray-100 border border-gray-300' :
                                            index === 2 ? 'bg-amber-100 border border-amber-300' :
                                                'hover:bg-gray-50'}`}
                            >
                                <p className="text-lg font-medium text-gray-700">
                                    <span className="font-bold mr-2">#{index + 1}</span>
                                    {item.name.charAt(0).toUpperCase() + item.name.slice(1)}
                                    {index === 0 && <span className="ml-2 text-yellow-600 text-xl">🏆</span>}
                                </p>
                                <p className="text-lg font-semibold text-gray-900">
                                    {formatTime(item.time)}
                                </p>
                            </div>
                        ))}
                    </div>
                )}
            </div>

        </div>
    )
}

export default Leaderboard