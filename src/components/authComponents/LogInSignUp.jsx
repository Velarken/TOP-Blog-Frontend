import { useState, useEffect } from "react";
import '../../styles/LogInSignUp.css';
import Login from "./Login";
import Signup from "./Signup";

export function LogInSignUp({

}) {

    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isSignedUp, setIsSignedUp] = useState(false);
    const [showLogin, setShowLogin] = useState(false);

    function handleScreenSwap() {
        setShowLogin(!showLogin)
    }


    return (
        <div className="auth-forms">
            <div className="user-selection">
                <button onClick={handleScreenSwap} id='loginButton' className={showLogin ? 'selected button' : 'deselected button'}><h1>Log In</h1></button>
                <button onClick={handleScreenSwap} id='signupButton' className={showLogin ? 'deselected button' : 'selected button'}><h1>Sign Up</h1></button>
            </div>
            {showLogin
            ? ( // login form
                <>
                    <Login />
                </>
            )
            : ( //signup form
                <>
                    <Signup />
                </>
            )
            }
        
        </div>
    )
}
export default LogInSignUp;