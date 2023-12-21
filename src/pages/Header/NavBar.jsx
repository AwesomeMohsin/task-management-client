import { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import toast from "react-hot-toast";


const NavBar = () => {


   
    const { user, logOut } = useContext(AuthContext)
    const navigate = useNavigate()



    const handleLogOut = () => {
        logOut()
            .then(() => {
                toast.success('Log out successfully')
                navigate('/')
            })
            .catch(error => {
            console.log(error.message);
        })
    }

    const navItems = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/addproduct' className="ml-1 btn btn-sm btn-outline text-[#808080]"><button>Add Product</button></NavLink></li>
        <li><NavLink to='/cart' className="ml-1 btn btn-sm btn-outline text-[#808080]"><button>My Cart</button></NavLink></li>
        

    </>

    return (
        <div className="navbar flex flex-col-reverse md:flex-row md:container mx-auto">
            <div className="md:navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navItems}
                    </ul>
                </div>
                <img className="h-10" src="/icons/logo.png" alt="" />
                <Link to='/' className="btn btn-ghost normal-case text-xl">TaskPilot</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navItems}
                </ul>
            </div>
           
            
            {
                    user ?
                        <div className="md:navbar-end flex flex-row gap-2 items-center">
                            <p className="font-semibold">{user.displayName}</p>
                            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    {
                                        user.photoURL !== null ? <img src={user.photoURL} /> : <img src="/icons/user.png" />
                                    }
                                </div>
                            </label>
                            <button
                                onClick={handleLogOut}
                                className="btn btn-outline text-[#808080]">Log Out</button>
                        </div>

                        :
                        
                        <div className="md:navbar-end flex flex-row gap-2 items-center">
                            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <img src="/icons/user.png" />
                                </div>
                            </label>
                            <Link to='/login' className="btn btn-outline text-[#808080]">Login</Link>
                        </div>
            }
           

        </div>
    );
};

export default NavBar;