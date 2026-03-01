import { useState } from "react";

export function Signup({

}) {

    return (
        <form id="signupForm" className="form">
            <p className="form-desc">
                Once logged in, you will be able to view all posts. Publishers may write 
                and edit their own posts before publishing their post for others to view.
                Any user may leave a comment on your post to get the conversation started.
            </p>
            <div className="form-line">
                <label htmlFor="username">Username:</label>
                <input type="text" name="username"/>
            </div>
            <div className="form-line">
                <label htmlFor="firstname">First Name:</label>
                <input type="text" name="firstname"/>
            </div>
            <div className="form-line">
                <label htmlFor="lastname">Last Name:</label>
                <input type="text" name="lastname"/>
            </div>
            <div className="form-line">
                <label htmlFor="password">Password:</label>
                <input type="password" name="password"/>
            </div>
            <div className="form-line">
                <label htmlFor="confirmPassword">Confirm Password:</label>
                <input type="password" name="confirmPassword"/>
            </div>

            <button type="submit" className="submit-button">Sign Up</button>
        </form>
    )
}
export default Signup;