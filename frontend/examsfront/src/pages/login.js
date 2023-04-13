import { useRef, useState, useEffect } from 'react';
// import AuthContext from "../context/AuthProvider";

import axios from 'axios';
const LOGIN_URL = 'http://54.221.175.103:4000/users/login';

const Login = () => {
    // const { setAuth } = useContext(AuthContext);
    const userRef = useRef();
    const errRef = useRef();

    const [user, setUser] = useState('');
    const [pwd, setPwd] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        userRef.current.focus();
    }, [])

    useEffect(() => {
        setErrMsg('');
    }, [user, pwd])

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            let headersList = {
                "Content-Type": "application/json" 
               }
               
               let bodyContent = JSON.stringify({
                 "username":user,
                 "password":pwd
               });
               
               let reqOptions = {
                 url: LOGIN_URL,
                 method: "POST",
                 headers: headersList,
                 data: bodyContent,
               }
               
               let response = await axios.request(reqOptions);
               console.log(response.data.data)
               if(response.status === 200){
            
                const accessToken = response?.data?.data?.token;
                const email = response?.data?.data?.email;
                const firstname = response?.data?.data?.firstname;
                const id = response?.data?.data?.id;
                sessionStorage.setItem("token", accessToken);
                sessionStorage.setItem("email", email);
                sessionStorage.setItem("firstname", firstname);
                sessionStorage.setItem("id", id);
            
                setUser('');
                setPwd('');
                setSuccess(true);
                window.location.href = '/filmmaker';
               }
           
           
        } catch (err) {
            if (!err?.response) {
                setErrMsg('No Server Response');
            } else if (err.response?.status === 400) {
                setErrMsg('Missing Username or Password');
            } else if (err.response?.status === 401) {
                setErrMsg('Unauthorized');
            } else {
                setErrMsg('Login Failed');
            }
            errRef.current.focus();
        }
    }

    return (
        <>
            {success ? (
                <section>
                    <h1>You are logged in!</h1>
                    <br />
                    <p>
                        <a href="/">Go to Home</a>
                    </p>
                </section>
            ) : (
                <section>
                    <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
                    <h1 className="registerName">Sign In</h1>
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="username">Username:</label>
                        <input
                            type="text"
                            id="username"
                            ref={userRef}
                            autoComplete="off"
                            onChange={(e) => setUser(e.target.value)}
                            value={user}
                            required
                        />

                        <label htmlFor="password">Password:</label>
                        <input
                            type="password"
                            id="password"
                            onChange={(e) => setPwd(e.target.value)}
                            value={pwd}
                            required
                        />
                        <button>Sign In</button>
                    </form>
                    <p className="registerName">
                        Need an Account?<br />
                        <span className="line">
                            {/*put router link here*/}
                            <a href="/register">Sign Up</a>
                        </span>
                    </p>
                </section>
            )}
        </>
    )
}

export default Login