import React, { useContext } from 'react'
import "./../assets/scss/_section7.scss";
import axios from "axios";
import { MainContext } from "./../context/ContextProvider"
// import { useForm } from 'react-hook-form';

// const isValidEmail = email =>
//     // eslint-disable-next-line no-useless-escape
//     /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
//         email
//     );

function Section7() {
    // const { register, handleSubmit, errors } = useForm({
    //     mode: "onBlur",
    //     defaultValues: {
    //         email: ""
    //     }
    // });
    const { email, setEmail, name, setName, message, setMessage } = useContext(MainContext);
    // const handleEmailValidation = email => {
    //     console.log("ValidateEmail was called with", email);

    //     const isValid = isValidEmail(email);

    //     const validityChanged =
    //         (errors.email && isValid) || (!errors.email && !isValid);
    //     if (validityChanged) {
    //         console.log("Fire tracker with", isValid ? "Valid" : "Invalid");
    //     }

    //     return isValid;
    // };
    const client = axios.create({
        baseURL: "https://northwind.vercel.app/api/"
    });



    const handleSubmit = (e) => {
        e.preventDefault();
        addPosts(name, email, message);
    };

    function nameChange(e) {
        e.preventDefault();
        setName(e.target.value);
    }
    function messageChange(e) {
        e.preventDefault();
        setMessage(e.target.value);
    }
    function mailChange(e) {
        e.preventDefault();
        setEmail(e.target.value)
    }

    const addPosts = (name, email, message) => {
        client
            .post('categories', {
                name: name,
                email: email,
                message: message
            })
        setEmail('');
        setName('');
        setMessage('');
    };

    return (
        <section className='sect7'>
            <div className="container">
                <div className="section7">
                    <div className='heading'>
                        <span>Contact Us</span>
                        <div>Get In Touch</div>
                        <p>Lorem Ipsum decided to leave for the far World of Grammar</p>
                    </div>
                    <form onSubmit={handleSubmit} action="">
                        <span>Name</span>
                        <input onChange={nameChange} type="text" value={name} />
                        <span>Email</span>
                        <input /* ref={register({ required: true, validate: handleEmailValidation })}*/ onChange={mailChange} name="email" type="email" value={email} />
                        <span>Message</span>
                        <textarea onChange={messageChange} value={message} name="message" id="message" cols="30" rows="10"></textarea>
                        <button>Submit</button>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Section7