import React, { useEffect, useState } from "react";
import "./Header.css";

const Header = () => {
    const [showModel, setshowModel] = useState(false);
    const [theme, setTheme] = useState(localStorage.getItem("currentMode") ?? "dark");

    useEffect(() => {
        if (theme === "light") {
            document.body.classList.remove("dark")
            document.body.classList.add("light")
        }
        else {
            document.body.classList.remove("light")
            document.body.classList.add("dark")
        }
    }, [theme]);

    return (
        <header className="flex">
            <div />
            <button onClick={() => { setshowModel(true) }
            } className="menu icon-menu flex" />

            <nav>
                <ul className="flex">

                    <li> <a href="#"> About </a> </li>
                    <li> <a href="#"> Articles  </a> </li>
                    <li> <a href="#"> projects </a> </li>
                    <li> <a href="#"> speeking </a> </li>
                    <li> <a href="#"> contact </a> </li>

                </ul>
            </nav>

            <button onClick={() => {
                //send value to LS
                localStorage.setItem("currentMode", theme === "dark" ? "light" : "dark")
                //get value from LS
                setTheme(localStorage.getItem("currentMode"))
            }} className="mode flex">
            { theme==="dark" ?   <span  className="icon-moon-o"></span> :  <span  className="icon-sun"></span> }
            </button>



            {showModel && (<div className="fixed">

                <ul className="model ">
                    <li><button className="icon-clear" onClick={() => { setshowModel(false) }} />

                    </li>
                    <li> <a href="#"> About </a> </li>
                    <li> <a href="#"> Articles  </a> </li>
                    <li> <a href="#"> projects </a> </li>
                    <li> <a href="#"> speeking </a> </li>
                    <li> <a href="#"> contact </a> </li>

                </ul>
            </div>)}


        </header>
    );
}
export default Header;