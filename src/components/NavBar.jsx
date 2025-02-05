import { useState } from "react"
import logo from '../assets/logo.png'
import { RiCloseFill, RiMenu3Fill } from "@remixicon/react"

const NavBar = () => {

    const [isOpen, setIsOpen] = useState(false)

    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }

    return (
        <nav className="fixed top-4 left-0 right-0 z-50 m-2">
            <div className="text-neutral-500 bg-black/60 backdrop-blur-md max-w-7xl mx-auto px-4 py-3 flex justify-between items-center rounded-xl border border-neutral-800">
                {/* logo image */}
                <img src={logo} alt="logo" width={120} height={24} />

                {/* link - hidden on mobile */}
                <div className="hidden md:flex space-x-6">
                    <a href="#word" className="hover:text-neutral-200">
                        How it work
                    </a>

                    <a href="#pricing" className="hover:text-neutral-200">
                        Pricing
                    </a>

                    <a href="#testimonials" className="hover:text-neutral-200">
                        Testimonials
                    </a>
                </div>

                {/* Button - Hidden on mobile */}
                <div className="hidden md:flex space-x-4 items-center">
                    <a href="#" className="hover:text-neutral-200">
                        Login
                    </a>

                    <a href="#" className="border border-neutral-700 text-white py-2 px-4 rounded-lg hover:bg-neutral-700 transition">
                        Get a Demo
                    </a>

                    <a href="#" className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-500 transition">
                        Start a free Trail
                    </a>
                </div>

                {/* Navbar Icon for mobile */}
                <div className="md:hidden">
                    <button onClick={toggleMenu} className="text-white focus:outline-none" aria-label={isOpen ? "Close Menu" : "Open Menu"}>
                        {isOpen ? <RiCloseFill /> : <RiMenu3Fill />}
                    </button>
                </div>

            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-neutral-900/60 m-6 backdrop-blur-md border border-neutral-800 p-4 rounded-xl mt-2">
                    <div className="flex flex-col space-y-4 items-center">
                        <a href="#" className="hover:text-neutral-200 cursor-pointer">
                            Product
                        </a>
                        <a href="#" className="hover:text-neutral-200">
                            Pricing
                        </a>
                        <a href="#" className="hover:text-neutral-200">
                            Resources
                        </a>
                        <a href="#" className="hover:text-white">
                            Login
                        </a>
                        <a href="#" className="border border-neutral-700 text-white py-2 px-6 rounded-lg hover:bg-neutral-700 transition">
                            Get a Demo
                        </a>

                        <a href="#" className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-500 transition">
                            Start a free Trail
                        </a>
                    </div>
                </div>
            )}
        </nav>
    )
}

export default NavBar