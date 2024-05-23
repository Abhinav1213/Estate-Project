import React from 'react'
import { FaSearch } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <header className="bg-gray-800 p-4">
            <div className="container mx-auto flex justify-between items-center">
                <Link to="/" className="text-white text-lg font-bold">
                    <div className="text-white text-lg font-bold">
                        CHIND-Estate
                    </div>
                </Link>
                <div className="flex w-1/2 md:w-1/3 relative">
                    <input
                        type="text"
                        placeholder="Search..."
                        className="flex-1 px-3 py-2 rounded-l-md text-gray-700 focus:outline-none w-24 sm:w-64"
                    />
                    <button className="px-3 py-2 bg-gray-700 rounded-r-md text-gray-300 hover:text-white focus:outline-none">
                        <FaSearch />
                    </button>
                </div>
                <ul className="flex text-white">
                    <Link to="/" className="text-white text-lg font-bold">
                        <li className="px-2 hidden sm:inline">Home</li>
                    </Link>
                    <Link to="/about" className="text-white text-lg font-bold">
                        <li className="px-2 hidden sm:inline">About</li>
                    </Link>
                    <Link to="/signin" className="text-white text-lg font-bold">
                        <li className="px-2 hidden sm:inline">Sign In</li>
                    </Link>
                    <Link to="/signup" className="text-white text-lg font-bold">
                        <li className="px-2">Sign Up</li>
                    </Link>
                </ul>
            </div>
        </header>
    )
}

export default Header
