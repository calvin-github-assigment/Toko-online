import React, { useState } from "react";

const Register = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState("");

    return (
        <div>
            <p>Email</p>
                <input className="form-control" placeholder="Masukan emali" value={email} onChange={(e) => setEmail(e.target.value)}
                />
                <p>Email</p>
                <input className="form-control" placeholder="Masukan password" value={password} onChange={(e) => setPassword(e.target.value)}
                />
                 <button className="btn btn-primary">Login</button>
        </div>
    )
};

export default Register;