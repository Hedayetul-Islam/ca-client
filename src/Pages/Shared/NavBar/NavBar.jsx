import { Link } from "react-router-dom";
import logo from '../../../assets/logo.png'

const NavBar = () => {

    const navOptions = <>
        <li tabIndex={0}>
            <details>
                <summary>Solutions</summary>
                <ul className="p-2">
                    <li><a>Submenu 1</a></li>
                    <li><a>Submenu 2</a></li>
                </ul>
            </details>
        </li>
        <li tabIndex={0}>
            <details>
                <summary>Features</summary>
                <ul className="p-2">
                    <li><a>Submenu 1</a></li>
                    <li><a>Submenu 2</a></li>
                </ul>
            </details>
        </li>
        <li tabIndex={0}>
            <summary>Blogs</summary>
        </li>
        <li tabIndex={0}>
            <details>
                <summary>About</summary>
                <ul className="p-2">
                    <li><a>Submenu 1</a></li>
                    <li><a>Submenu 2</a></li>
                </ul>
            </details>
        </li>
    </>

    return (
        <>
            <div className="navbar bg-base-100 lg:px-10 h-24 bg-gradient-to-r from-[#FCF6FC]   to-[#C5EAED]">
                <div className="lg:navbar-center lg:ml-20">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navOptions}
                        </ul>
                    </div>
                    <Link className="btn btn-ghost normal-case text-xl"><img src={logo} alt="" /></Link>
                </div>
                <div className="navbar-center hidden text-black font-bold lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navOptions}
                    </ul>
                </div>
                <div className="navbar-end gap-6">
                    <a className="btn btn-outline normal-case btn-md px-8 text-lg text-sky-700 font-bold">Login</a>
                    <a className="btn btn-primary normal-case btn-md px-8 text-lg font-bold text-white">Register</a>
                </div>
            </div>
        </>
    );
};

export default NavBar;