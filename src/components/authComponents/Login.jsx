import { useState } from "react";

export function Login({

}) {

    return (
        <form id="loginForm" className="form">
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
                <label htmlFor="password">Password:</label>
                <input type="password" name="password"/>
            </div>

            <button type="submit">Log In</button>
        </form>
    )
}
export default Login;