import React from "react";
import "./Main.css";
import { useState } from "react";
import { myProject } from "./myProject";
import { motion , AnimatePresence } from "framer-motion";

//

const Main = () => {
    const [currentActive, setcurrentActive] = useState("all");
    const [arr, setArr] = useState(myProject);
    const handleClick = (buttoncategory) => {
        setcurrentActive(buttoncategory)
        const newArr = myProject.filter((item) => {
            const zzz = item.category.find((myItem) => {
                return myItem === buttoncategory
            })
            return zzz === buttoncategory
        })
        setArr(newArr)
    }
    return (
        <main className="flex ">
            <section className="flex left-section">
                <button onClick={() => {
                    setcurrentActive("all");
                    const newArr = myProject.filter(() => {
                        return myProject
                    })
                    setArr(newArr)
                }} className={currentActive === "all" ? "active" : null} >All projects</button>


                <button onClick={() => {
                    handleClick("css")
                }} className={currentActive === "css" ? "active" : null}
                >html & css</button>



                <button onClick={() => {
                    handleClick("java")
                }} className={currentActive === "java" ? "active" : null}
                >java script</button>



                <button onClick={() => {
                    handleClick("node")
                }} className={currentActive === "bootstrap" ? "active" : null}
                >React & Mui </button>


                <button onClick={() => {
                    handleClick("react")
                }} className={currentActive === "React" ? "active" : null}
                >React & Express</button>



            </section>


            <section className="right-section  flex ">
                <AnimatePresence>
                {arr.map((item) => {
                    return (
                        <motion.article 
                        layout
                        initial={{ transform: "scale(0)" }}
                        animate={{ transform: "scale(1)" }}
                        transition={{type:"spring" ,damping:8 , stiffness:5 }}
                        key={item.imgPath} className="card ">
                            <img width={214} src={item.imgPath} />
                            <div style={{ width: "214px" }} className="box">
                                <h1 className="title">{item.project_title}</h1>


                                <p className="sub-title">Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, distinctio?</p>


                                <div className="flex icons">
                                    <div style={{ gap: "11px" }} className="flex">
                                        <div className="icon-link"></div>
                                        <div className="icon-github"></div>
                                    </div>
                                    <a className="link flex" href="">more <span style={{ alignSelf: "end" }} className="icon-arrow-right "></span></a>
                                </div>
                            </div>
                        </motion.article>
                    )
                })}
                </AnimatePresence>
            </section>

        </main>
    );
}
export default Main;