import { FaGithub } from "react-icons/fa"
import { Link } from "react-router"


const Footer = () => {
    return (
        <div className="py-10 shadow-amber-600">
            <div className="flex justify-center items-center gap-2">
                <p className="text-center font-roboto text-sm text-gray-700">Made by Franklin</p>
                <Link to={"https://github.com/Four26"} target="_blank" rel="noopener noreferrer">
                    <FaGithub className="cursor-point" />
                </Link>
            </div>
        </div>
    )
}

export default Footer