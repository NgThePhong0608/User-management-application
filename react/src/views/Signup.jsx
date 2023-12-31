import { Link } from "react-router-dom";

export default function Signup() {
    const onSubmit = (event) => {
        event.preventDefault();
    };
    return (
        <form action="" onSubmit={onSubmit}>
            <h1 className="title">Signup for free</h1>
            <input type="text" placeholder="Full Name" />
            <input type="email" placeholder="Email Address" />
            <input type="password" placeholder="Password" />
            <input type="password" placeholder="Confirm Password" />
            <button className="btn btn-block">Signup</button>
            <p className="message">
                Already Registered ? <Link to="/login">Sign in</Link>
            </p>
        </form>
    );
}
