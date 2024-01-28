import React, { useContext } from 'react'
import {BiChevronDown, BiMenu, BiSearch, BiShareAlt} from "react-icons/bi"
import { MovieContext } from "../../context/Movie.context";

const NavSm = () => {
    const {movie} = useContext(MovieContext);
    return (
        <>
            <div className='text-gray-700 flex items-center justify-between'>
                <div>
                    <h3 className="text-xl font-bold">{movie.original_title}</h3>
                </div>
            </div>
            <div className="w-8 h-8">
                <BiShareAlt className="w-full h-full"/>
            </div>
        </>
    )
}

function NavMd(){
    return(
        <>
            <div className='w-full flex items-center gap-3 bg-white px-3 py-1 rounded-md'>
                <BiSearch />
                <input type='search' className='w-full bg-transparent border-none focus:outline-none'/>
            </div>
        </>
    )
}

function NavLg() {
    return(
        <>
            <div className='contianer flex mx-auto px-4 items-center justify-between'>
                <div className='flex items-center w-1/2 gap3'>
                <div className='w-10 h-10'>
                    <img
                    src="https://i.ibb.co/zPBYW3H/imgbin-bookmyshow-office-android-ticket-png.png"
                    alt="bookMyShowLogo"
                    className="w-full h-full"
                    />
                </div>
                <div className='w-full flex items-center gap-3 bg-white px-3 py-1 rounded-md'>
                    <BiSearch />
                    <input
                        type="search"
                        className="w-full bg-transparent border-none focus:outline-none"
                        placeholder="Search for movies, events, plays, sports and activities.."
                    />
                </div>
                </div>
                <div className='flex items-center gap-3'>
                    <span className='text-gray-300 text-base flex items-center cursor-pointer hover:text-white'>
                    Hampi <BiChevronDown/>
                    </span>
                    <button className='bg-red-600 text-white px-2 py-1 text-sm rounded'>Sign In</button>
                    <div className='w-8 h-6 text-white'>
                        <BiMenu className="w-full h-full"/>
                    </div>
                </div>
            </div>
        </>
    )
}

const MovieNavbar = () => {
    return (
        <nav className='bg-black px-4 my-3'>
            {/* Small NavBar */}
            <div className='md:hidden'>
                <NavSm />
            </div>
            {/* {Medium Screen Size - Tab} */}
            <div className='hidden md:flex lg:hidden'>
                <NavMd />
            </div>
            {/* {Large Screen Size - Laptop} */}
            <div className='hidden md:hidden lg:flex'>
                <NavLg />
            </div>
        </nav>
    )
}

export default MovieNavbar;