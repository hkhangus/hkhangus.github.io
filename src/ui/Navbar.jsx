import { Link, useLocation } from "react-router-dom"
import { useState, useEffect } from "react"


export default function Navbar(){
    const menuItems = [
        {
            title: "Home",
            link: "/"
        },
        // {
        //     title: "About me",
        //     link: "/aboutme"
        // },
        {
            title: "Portfolios",
            link: "/portfolios"
        },
        {
            title: "My resume",
            link: "/resume"
        },
        {
            title: "My blogs",
            link: "/blogs"
        },
        {
            title: "Email me",
            link: "mailto:huukhangtc@gmail.com"
        }
    ]

    const location = useLocation();
    const currentPath = location.pathname;

    const [activePage, setActivePage] = useState("Home");

    useEffect(() => {
        const currentPageTitle = menuItems.find(item => item.link.includes(currentPath))?.title;
        setActivePage(currentPageTitle || "Home");
    }, [currentPath]);

    function toggleDarkMode(){
        document.documentElement.classList.toggle('dark');
    }

    return(     
        <div className=" top-0 fixed w-full mx-auto py-4 bg-cyan-200 bg-opacity-50 dark:text-white z-10">
            {/* <div className=" absolute m-0 top-1/2 -translate-y-1/2 w-full p-4"> */}
                {/* <h1 className=" font-light text-3xl mb-10">Nguyen Huynh Huu Khang</h1> */}
                <div className=" absolute right-0 mr-4">
                    <button onClick={toggleDarkMode}>
                        <p className=" text-yellow-500 hidden dark:block text-4xl">☀</p>
                        <p className=" dark:hidden">🌙</p>
                    </button>
                </div>
                <ul className=" flex justify-center">
                    {menuItems.map((item, index) => (
                        activePage === item.title ?
                            <li key={index} className=" text-center mx-4 underline underline-offset-4">
                                <Link to={item.link}>{item.title}</Link>
                            </li> : 
                            <li key={index} className=" text-center mx-4 hover:underline underline-offset-4">
                                 <Link to={item.link}>{item.title}</Link>
                            </li>
                        
                        // <li key={index} className=" text-center mt-4 hover:underline underline-offset-4">
                        //     <Link to={item.link}>{item.title}</Link>
                        // </li>
                    ))}
                </ul>
            {/* </div> */}
        </div>
        
    )
}