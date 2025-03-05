import { IoSearch } from "react-icons/io5";
import { VscAccount } from "react-icons/vsc";
import { BsCart4 } from "react-icons/bs";
import { NavLink } from 'react-router-dom';
import { useContext } from 'react';
import { landingPageContext } from '../../pages/Home/context/LandingPageContext';

const Navbar = () => {
    const context = useContext(landingPageContext);
    if (!context) {
        throw new Error(
            "Navbar component must be used within a LandingPageContextProvider"
        );
    }
    const { state } = context;
    return (
        <div className='flex flex-col items-center justify-center'>
            <div className='flex justify-between container mx-auto py-8 items-center'>
                <div title='Search'>
                    <IoSearch size={28} />
                </div>
                <div>
                    <NavLink to="/" className='text-3xl font-bold text-white'>
                        <h1 className='text-3xl font-semibold'>NsFashion.pk</h1>
                    </NavLink>
                </div>
                <div className='flex justify-between gap-4'>
                    <div title='Account'>
                        <VscAccount size={28} />
                    </div>
                    <NavLink to="/cart" title='Cart'>
                        <div title='Cart' className='relative cursor-pointer'>
                            <BsCart4 size={28} />
                            <p className='bg-white absolute left-4 px-2 top-3 py-0.5 text-red-400 rounded-full text-center'>{state?.totalCartItem}</p>
                        </div>
                    </NavLink>
                </div>
            </div>
            <ul className='flex gap-4 mb-2'>
                <li>
                    <NavLink to="/" className="hover:underline hover:text-white">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/dashboard" className="hover:underline hover:text-white">Dashboard</NavLink>
                </li>
                <li>
                    <NavLink to="/drinkware" className="hover:underline hover:text-white">Drinkware</NavLink>
                </li>
                <li>
                    <NavLink to="/health-beauty" className="hover:underline hover:text-white">Health & Beauty</NavLink>
                </li>
                <li>
                    <NavLink to="/home-lifestyle" className="hover:underline hover:text-white">Home & Lifestyle</NavLink>
                </li>
                <li>
                    <NavLink to="/home-appliances" className="hover:underline hover:text-white">Home Appliances</NavLink>
                </li>
                <li>
                    <NavLink to="/kitchen-gadgets" className="hover:underline hover:text-white">Kitchen Gadgets</NavLink>
                </li>
                <li>
                    <NavLink to="/about-us" className="hover:underline hover:text-white">About Us</NavLink>
                </li>
                <li>
                    <NavLink to="/contact-us" className="hover:underline hover:text-white">Contact Us</NavLink>
                </li>
            </ul>
        </div>
    )
}

export default Navbar;