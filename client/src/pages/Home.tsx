import { Link } from "react-router"

const Home = () => {
    return (
        <div className="flex-1 h-screen content-center">
            <div className="flex flex-col justify-center items-center px-10 sm:px-0">
                <h1 className="my-6 font-raleway text-4xl text-center text-gray-900 font-bold">Welcome to Find that Pokemon Game.</h1>
                <p className="max-w-[550px] text-center text-gray-700 font-roboto">This game is inspired by the <Link to={"https://en.wikipedia.org/wiki/Where%27s_Wally%3F"} className="text-blue-500" target="_blank" rel="noopener noreferrer">
                    "Where's Wally"</Link>. It  is a game where you have to scan a sketch of a crowd, looking for a particular person. But this time you have to find a specific <span className="text-yellow-500">Pokemon</span>.</p>
                <Link
                    to="/game"
                    className="border border-gray-400 mt-10 px-10 py-2 rounded-md text-gray-800 hover:bg-green-500 hover:text-white hover:border-transparent transition-all duration-200 ease-in-out cursor-pointer">
                    Play
                </Link>
            </div>
        </div>
    )
}

export default Home