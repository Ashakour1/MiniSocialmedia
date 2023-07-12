import { useContext } from "react";
import { UserContext } from "../App";



const Header  = ({setUser}) =>{

    const uservAlue  = useContext(UserContext);
    console.log(uservAlue);
    
    return (
        <div>
            <span>Welcome {uservAlue}!</span>
            <button onClick={() => setUser("")} type="submit" >Logout </button>
        </div>
    )
};

export default Header;