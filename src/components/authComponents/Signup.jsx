import { useState } from "react";

export function Signup({

}) {
    const [username,setUsername] = useState('');
    const [firstName,setFirstName] = useState('');
    const [lastName,setLastName] = useState('');
    const [password,setPassword] = useState('');
    const [confirmPassword,setConfirmPassword] = useState('');

    function handleFormSubmit(e) {
        e.preventDefault();
        const userData = {
            username,
            firstName,
            lastName,
            password,
            confirmPassword
        }
        if (userData.password === userData.confirmPassword) console.log('Both password entries match.')
        if (userData.password !== userData.confirmPassword) {
            console.log('Passwords do not match. Please check and try again.')
            return
        }
        console.table(userData)
        // send form data to API
    }
    return (
        <form id="signupForm" className="form" onSubmit={(e) => handleFormSubmit(e)}>
            <p className="form-desc">
                Once logged in, you will be able to view all posts. Publishers may write 
                and edit their own posts before publishing their post for others to view.
                Any user may leave a comment on your post to get the conversation started.
            </p>
            <div className="form-line">
                <label htmlFor="username">Username:</label>
                <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} name="username" autoComplete="username"/>
            </div>
            <div className="form-line">
                <label htmlFor="firstname">First Name:</label>
                <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} name="firstname" autoComplete="given-name"/>
            </div>
            <div className="form-line">
                <label htmlFor="lastname">Last Name:</label>
                <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} name="lastname" autoComplete="family-name"/>
            </div>
            <div className="form-line">
                <label htmlFor="password">Password:</label>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} name="password" autoComplete="current-password"/>
            </div>
            <div className="form-line">
                <label htmlFor="confirmPassword">Confirm Password:</label>
                <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} name="confirmPassword" autoComplete="off"/>
            </div>

            <button type="submit" className="submit-button">Sign Up</button>
        </form>
    )
}
export default Signup;