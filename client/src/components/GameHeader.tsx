import { Link } from "react-router";
import { useStore } from "../store/store";
import { pokemonList } from "./pokemonLists";

const GameHeader = ({ foundPokemon }: { foundPokemon: string[] }) => {
    const { timer, startTimer, stopTimer, resetTimer } = useStore();

    const formatTime = (seconds: number) => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
    };

    return (
        <header className="bg-zinc-900 w-full px-6 py-4 shadow-md">
            <div className="max-w-7xl mx-auto sm:flex sm:items-center sm:justify-between">
                <div className="flex items-center gap-4 text-white">
                    <button
                        onClick={startTimer}
                        className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md text-sm font-semibold cursor-pointer font-roboto"
                    >
                        Start
                    </button>
                    <button
                        onClick={stopTimer}
                        className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md text-sm font-semibold cursor-pointer font-roboto"
                    >
                        Stop
                    </button>
                    <button
                        onClick={resetTimer}
                        className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-semibold cursor-pointer font-roboto"
                    >
                        Reset
                    </button>
                    <p className="text-sm font-roboto">Timer: {formatTime(timer)}</p>
                </div>

                <Link to="/" className="text-white text-2xl text-center font-raleway font-bold my-1">
                    Find That Pokémon!
                </Link>

                <div className="flex gap-4 items-center overflow-x-auto">
                    {pokemonList.map((pokemon) => (
                        <div
                            key={pokemon.id}
                            className={`flex flex-col items-center text-xs transition-opacity ${foundPokemon.includes(pokemon.name)
                                ? "opacity-100"
                                : "opacity-40"
                                }`}
                        >
                            <img
                                src={pokemon.image}
                                alt={pokemon.name}
                                className={`w-10 h-10 rounded-full object-contain border-2 ${foundPokemon.includes(pokemon.name)
                                    ? "border-green-500"
                                    : "border-gray-500"
                                    }`}
                            />
                            <span className="mt-1 truncate font-roboto text-white">
                                {pokemon.name}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
            <Link to="/leaderboard" className="text-white font-raleway text-xs underline">Leaderbord</Link>
        </header>
    );
};

export default GameHeader;