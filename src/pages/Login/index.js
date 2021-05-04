import React, { useEffect, useState } from 'react';
import NavBar from '../../molecules/NavBar';


const Login = (title, angka) => {
    const [welcomeText, setwelcomeText] = useState("Selamat Datang");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmitUsername = (e) =>{
        const data ={
            email: email,
            password: password,
        };
        console.log(data);
        setwelcomeText("Welcome");
    };

    useEffect(() =>{
        console.log("component did mount");
        setTimeout(()=>{
            setwelcomeText("Welcome");
        }, 300);
    }, []);

    useEffect(()=>{
        console.log("component di upadate");

    }, [welcomeText]);


    return (
        <div>
            <NavBar />
            <div className={{margin: "200px"}}>
            <div className="container">
                <h1>{welcomeText}</h1>
                <h2>{title}</h2>
                <h4>{angka}</h4>
                <p>Email</p>
                <input className="form-control" placeholder="Masukan emali" value={email} onChange={(e) => setEmail(e.target.value)}
                />
                <p>Email</p>
                <input className="form-control" placeholder="Masukan password" value={password} onChange={(e) => setPassword(e.target.value)}
                />
                 <button className="btn btn-primary">Login</button>
                </div>
              </div>
            </div>
    )
}

export default Login;