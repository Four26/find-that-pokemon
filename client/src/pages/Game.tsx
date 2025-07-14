import { useEffect, useState } from "react";
import pokemon_bg from "../assets/images/pokemons.jpg";
import GameHeader from "../components/GameHeader";
import LeaderboardModal from "../components/LeaderBoardModal";
import { pokemonList } from "../components/pokemonLists";
import type { ClosestPokemon } from "../types/types";
import { useStore } from "../store/store";

const Game = () => {
    const [dropDownPosition, setDropDownPosition] = useState<{ x: number, y: number } | null>(null);
    const [targetPokemon, setTargetPokemon] = useState<string | null>(null);
    const [foundPokemon, setFoundPokemon] = useState<string[]>([]);
    const { message, setMessage, clearMessage, gameOver, isRunning } = useStore();

    useEffect(() => {
        if (foundPokemon.length === pokemonList.length) {
            gameOver();
        }
    }, [foundPokemon, gameOver]);

    const handleClick = (e: React.MouseEvent<HTMLImageElement>) => {
        if (!isRunning) {
            setMessage("Please start the timer first!");
            return;
        }

        const img = e.target as HTMLElement;
        const rect = img.getBoundingClientRect();
        clearMessage();

        // Click position in pixels (for dropdown placement)
        const clickX = e.clientX;
        const clickY = e.clientY;
        // Click position in percentages (for Pokémon detection)
        const clickXPercent = ((clickX - rect.left) / rect.width) * 100;
        const clickYPercent = ((clickY - rect.top) / rect.height) * 100;

        setDropDownPosition({ x: clickX, y: clickY });

        // Find the closest Pokémon (if any)
        const closest = pokemonList.reduce<ClosestPokemon>((closest, pokemon) => {
            const distance = Math.sqrt(
                Math.pow(pokemon.x - clickXPercent, 2) +
                Math.pow(pokemon.y - clickYPercent, 2)
            );
            return distance < 2 && distance < closest.distance ?
                { name: pokemon.name, distance } : closest;
        }, { name: null, distance: Infinity });

        setTargetPokemon(closest.name);
    };

    const handleSelect = (selectedPokemon: string) => {
        if (targetPokemon && selectedPokemon === targetPokemon) {
            setFoundPokemon([...foundPokemon, selectedPokemon]);
            setMessage(`You found ${selectedPokemon}.`);

        } else {
            setMessage(targetPokemon ? `Wrong! That's ${targetPokemon}` : "Wrong Pokemon!");
        }
        setDropDownPosition(null);
    };

    return (
        <div className='flex-1 justify-between items-center'>
            <GameHeader foundPokemon={foundPokemon} />
            <section className="p-4 flex justify-center items-center relative">
                <img
                    onClick={handleClick}
                    src={pokemon_bg}
                    alt="Pokémon Finder"
                    className="object-cover cursor-pointer max-h-[90vh]"
                />

                {message && (
                    <div className={`fixed top-4 left-1/2 transform -translate-x-1/2 p-4 rounded-lg z-20 ${message.startsWith("You") ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
                        }`}>
                        {message}
                    </div>
                )}

                {/* Always show all Pokémon in dropdown */}
                {dropDownPosition && (
                    <div
                        className="absolute bg-white border border-gray-300 rounded shadow-lg z-10"
                        style={{
                            left: `${dropDownPosition.x}px`,
                            top: `${dropDownPosition.y}px`
                        }}
                    >
                        {pokemonList
                            .filter(p => !foundPokemon.includes(p.name))
                            .map(pokemon => (
                                <div
                                    key={pokemon.name}
                                    className={`p-2 hover:bg-gray-100 cursor-pointer ${pokemon.name === targetPokemon ? "bg-blue-50" : ""
                                        }`}
                                    onClick={() => handleSelect(pokemon.name)}
                                >
                                    {pokemon.name}
                                </div>
                            ))
                        }
                    </div>
                )}
            </section>
            <LeaderboardModal />
        </div>
    );
};

export default Game;