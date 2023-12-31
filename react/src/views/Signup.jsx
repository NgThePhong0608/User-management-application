import { useRef } from "react";
import { Link } from "react-router-dom";
import axiosClient from "../axios-client";
import { useStateContext } from "../contexts/ContextProvider";

export default function Signup() {
    const nameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();
    const confirmPasswordRef = useRef();

    const { setUser, setToken } = useStateContext();

    const onSubmit = (event) => {
        event.preventDefault();
        const payload = {
            name: nameRef.current.value,
            email: emailRef.current.value,
            password: passwordRef.current.value,
            confirm_password: confirmPasswordRef.current.value,
        };
        axiosClient
            .post("/signup", payload)
            .then(({ data }) => {
                setUser(data.user);
                setToken(data.token);
            })
            .catch((err) => {
                const respone = err.respone;
                if (respone && respone.status === 422) {
                    console.log(respone.data.errors);
                }
            });
    };
    return (
        <form action="" onSubmit={onSubmit}>
            <h1 className="title">Signup for free</h1>
            <input ref={nameRef} type="text" placeholder="Full Name" />
            <input ref={emailRef} type="email" placeholder="Email Address" />
            <input ref={passwordRef} type="password" placeholder="Password" />
            <input
                ref={confirmPasswordRef}
                type="password"
                placeholder="Confirm Password"
            />
            <button className="btn btn-block">Signup</button>
            <p className="message">
                Already Registered ? <Link to="/login">Sign in</Link>
            </p>
        </form>
    );
}
