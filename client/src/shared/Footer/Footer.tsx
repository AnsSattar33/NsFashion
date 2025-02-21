import React from 'react'
import { NavLink } from 'react-router-dom'

type Props = {}

const Footer = (props: Props) => {
    return (
        <footer className="bg-red-400 text-white p-4">
            <h1 className="text-center text-2xl mb-4">NsFashion.pk</h1>
            <nav className="flex justify-center space-x-4">
                <NavLink to="/" className="underline">Home</NavLink>
                <NavLink to="/shop" className="underline">Shop</NavLink>
                <NavLink to="/drinkware" className="underline">Drinkware</NavLink>
                <NavLink to="/health-beauty" className="underline">Health & Beauty</NavLink>
                <NavLink to="/home-lifestyle" className="underline">Home & Lifestyle</NavLink>
                <NavLink to="/home-appliances" className="underline">Home Appliances</NavLink>
                <NavLink to="/kitchen-gadgets" className="underline">Kitchen Gadgets</NavLink>
                <NavLink to="/about-us" className="underline">About Us</NavLink>
                <NavLink to="/contact-us" className="underline">Contact Us</NavLink>
            </nav>
            <div className="text-center mt-4">
                &copy; 2025 NsFashion.pk
            </div>
        </footer>
    )
}

export default Footer