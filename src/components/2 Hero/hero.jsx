import React from "react";
import "./hero.css";
import Lottie from "lottie-react";
import devAnimation from "../../../public/animation/dev.json";
import { useRef } from "react";
import { motion , AnimatePresence } from "framer-motion";
const hero = () => {
    const lottieRef = useRef();
    return (
        <section className="hero flex">
            <div className="left-section">
                <div className="parent-avatar flex">
                    <motion.img  
                    inherit={{transform: "scale(0)"}}
                    animate={{transform:"scale(1.1)"}}
                    transition={{damping:6 , type:"spring", stiffness:100}}
                    className="avatar " src="./٢٠٢٣٠٩٢٨_١٦٤٩٥٥-modified.png" alt="" />
                    <div className="icon-verified"> </div>
                </div>
                <motion.h1 
                initial={{opacity :0}}
                animate={{opacity:1}}
                transition={{duration:2}}
                className="title">
                    My name is Abd_Albaqi Turkman I'm Frontend developer
                </motion.h1>
                <p className="sub-title">
                    I'm Spencer, a software designer and entrepreneur based in New York City. I’m the founder and CEO of Planetaria, where we develop technologies that empower regular people to explore space on their own terms.
                </p>
                <div className="all-icons flex ">
                    <div className="icon-twitter"> </div>
                    <div className="icon-instagram"> </div>
                    <div className="icon-github"> </div>
                    <div className="icon-linkedin"> </div>
                                      
                </div>
            </div>

            <div className="right-section animation">
            <Lottie className="dev" onLoadedImages={()=>{
                //https://lottiereact.com/#ondestroy
lottieRef.current.setSpeed(0.5)
            }} lottieRef={lottieRef} animationData={devAnimation} />
            </div>

        </section>
    );
}
export default hero;