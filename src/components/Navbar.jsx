import { useState } from 'react'
import { NavLink } from 'react-router-dom'

export default function Navbar() {
    const [isMobile, setIsMobile] = useState(false)

    return(
        <div className="flex justify-center items-center bg-red-600">
            <div className="w-full lg:w-5/6 bg-red-600 text-white">
                <div className="flex flex-col lg:flex-row">
                    <div className="flex items-center justify-between px-4 py-4 lg:py-0 border-b border-red-700 lg:border-b-0">
                        <div className="text-white uppercase font-semibold">
                            <NavLink to="/">
                                <img src="https://cdn.discordapp.com/attachments/940834033825349653/1125700596536721440/logo.png" alt="LOGO" width={50}/>
                            </NavLink>
                        </div>
                        <div className="">
                            <button onClick={() => setIsMobile(!isMobile)} className="focus:outline-none text-white block lg:hidden">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path className={!isMobile ? 'block' : 'hidden'} stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                                    <path className={isMobile ? 'block' : 'hidden'} strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                    </div>

                    <div className={`${isMobile ? 'block' : 'hidden'} lg:flex flex-col lg:flex-row justify-between w-full py-4 lg:py-0 `}>
                        <div className="flex flex-col lg:flex-row">
                            <NavLink to="/" className="inline-flex items-center lg:block px-4 py-3 lg:py-5 text-red-200 hover:text-white ">
                                <svg className="w-6 h-6 mr-1 lg:hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
                                </svg>
                                Beranda
                            </NavLink>
                            <NavLink to="/booking" className="inline-flex items-center lg:block px-4 py-3 lg:py-5 text-red-200 hover:text-white">
                            <svg className="w-6 h-6 mr-1 lg:hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
                            </svg>
                                Booking
                            </NavLink>
                        </div>
                        <div className="flex flex-col lg:flex-row lg:items-center">
                            <NavLink to="/" className="inline-flex items-center lg:block px-4 py-3 lg:py-5 lg:px-7 text-red-200 hover:text-white">
                                <svg className="w-6 h-6 mr-1 lg:w-5 lg:h-5 lg:mr-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path>
                                </svg>
                                <div className="lg:hidden">
                                    Notifikasi
                            </div>
                            </NavLink>
                            <button >Logout</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}