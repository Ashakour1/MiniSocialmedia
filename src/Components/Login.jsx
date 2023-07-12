import React from "react";
import { useState } from "react";

const Login = (props) =>{

    const [userName,setUsername] = useState ("")

    const handleSubmit = (e) =>{
      e.preventDefault();
      props.setUser(userName);
    };

    return (
        <div>
            <form 
            onSubmit={handleSubmit}
            >
                <input type="text" placeholder="enter username"
                onChange={(e) => setUsername(e.target.value)}
                />
                <button type="submit">Login</button>
            </form>
        </div>
    )
};

export default Login;