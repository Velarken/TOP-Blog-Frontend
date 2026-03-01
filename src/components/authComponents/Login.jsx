import { useState } from "react";

export function Login({

}) {

    function handleFormSubmit() {
        fetch('', {
            method: 'POST',
            body: JSON.stringify({ username: username, password: password})
        })
        .then(res => res.json())
        // .then() save token data to localStorage
    }
    /* 
    fetch('https://api.example.com/data', {
    method: 'POST', // or 'GET', 'PUT', etc.
    headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer my-token', // for authentication
        'Custom-Header': 'some-value'
    },
    body: JSON.stringify({ key: 'value' }) // body for POST/PUT requests
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));
    */

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