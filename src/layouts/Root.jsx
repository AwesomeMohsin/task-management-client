import { Toaster } from "react-hot-toast";
import { Outlet } from "react-router-dom";
import NavBar from "../pages/Header/NavBar";
import Footer from "./Footer";

const Root = () => {
    return (
        <div>
            <NavBar ></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>



            <Toaster></Toaster>
        </div>
    );
};

export default Root;