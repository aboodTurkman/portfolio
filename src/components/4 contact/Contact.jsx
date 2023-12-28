import React from "react";
import "./Contact.css";
import { useForm, ValidationError } from '@formspree/react';
import Lottie from "lottie-react";
import doneAnimation from "../../../public/animation/done.json";
import emailAnimation from "../../../public/animation//contact.json";
const Contact = () => {
    const [state, handleSubmit] = useForm("mrgwnylb");



    return (

        <section className="contact-us">


            <h1 className="title"> <span className="icon-envelope" />  Contact us</h1>

            <p className="sub-title">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis repellendus eius modi tenetur recusandae perspiciatis!</p>

            <div style={{ justifyContent: "space-between" }} className="flex">
                <form onSubmit={handleSubmit} className="">
                    <label htmlFor="email">Email Adress</label>
                    <input autoComplete="off" required type="email" name="email" id="email" />

                    <ValidationError
                        prefix="Email"
                        field="email"
                        errors={state.errors}
                    />

                    <div className="flex" style={{ marginTop: "24px" }}>
                        <label htmlFor="">Your Message</label>
                        <textarea required name="message" id="message"></textarea>
                        <ValidationError
                            prefix="Message"
                            field="message"
                            errors={state.errors}
                        />
                    </div>
                    <button type="submit" disabled={state.submitting} className="submit">{state.submitting ? "sumitting ..." : "submit"}</button>
                    {state.succeeded && (<h1 className="flex" style={{ fontSize: "16px", marginTop: "1.7rem" }}> <Lottie loop="false" style={{ height: 44 }} animationData={doneAnimation} /> thanks for using my web site</h1>)}
                </form>

                <div className="flex anemation"> <Lottie className="contact-animation" style={{ height: 300}} animationData={emailAnimation} /></div>
            </div>
        </section>

    );
}


export default Contact;