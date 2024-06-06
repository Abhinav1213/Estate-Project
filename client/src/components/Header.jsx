import React from 'react'
import { FaSearch } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Header = () => {
    const { currentUser } = useSelector((state) => state.user)
    console.log(currentUser);
    return (
        <header className="bg-gray-800 p-4">
            <div className="container mx-auto flex justify-between items-center">
                <Link to="/" className="text-white text-lg font-bold">
                    <div className="text-white text-lg font-bold">
                        MERN-Estate
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
                <ul className="flex items-center text-white space-x-4">
                    <li>
                        <Link to="/" className="text-white text-lg font-bold px-2 hidden sm:inline">Home</Link>
                    </li>
                    <li>
                        <Link to="/about" className="text-white text-lg font-bold px-2 hidden sm:inline">About</Link>
                    </li>
                    {currentUser === null ? (<li>
                            <Link to="/signin" className="text-white text-lg font-bold px-2 hidden sm:inline">Sign In</Link>
                        </li>)
                        : (<li> 
                                <div className="flex items-center">
                                    <Link to="/profile">
                                        <img src={currentUser.avatar} alt="User Avatar" className="w-8 h-8 rounded-full" />   
                                    </Link>
                            </div>
                        </li>)}
                    <li>
                        {
                            currentUser === null ? (<Link to="/signup" className="text-white text-lg font-bold px-2 hidden sm:inline">Sign Up</Link>)
                            : null
                        
                        }

                    </li>
                </ul>

            </div>
        </header>
    )
}

export default Header
