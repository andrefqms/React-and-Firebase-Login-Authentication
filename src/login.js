import React from 'react';

const Login = (props) =>{

    const {email, setEmail,
        password , setPassword, 
        handleLogin, handleSignup,
        hasAccount,  setHasAccount, 
        emailError , passWordError } = props;

    return (
        <section className = "login">
            <div className="loginContainer">
            {hasAccount ? (
               <h1>Login</h1>
            ): (
                <h1>Sign Up</h1>
            )}
            <label>Username</label>
                <input type = "text"
                    autoFocus
                    required
                    value = {email}
                    onChange = {(e) => setEmail(e.target.value)}
                />
                <p className = "errorMsg">{emailError}</p>
            <label>Password</label>
                <input type="password" required value={password}
            onChange={(e) => setPassword(e.target.value)}/>
                <p className="errorMsg">{passWordError}</p>
            <div className="btnContainer">
                {hasAccount ? (
                    <>
                    <button onClick={handleLogin}>Sign In</button>
                    <p>Don't Have an account? <span onClick = {() => setHasAccount(!hasAccount)}>Sign up</span></p>
                    </>
                ) : (
                    <>
                    <button onClick={handleSignup}>Sign Up</button>
                    <p>Have an account? <span onClick = {() => setHasAccount(!hasAccount)}>Sign in</span> </p>
                    </>
                )}
            </div>
            </div>
        </section>
    )
}
export default Login;