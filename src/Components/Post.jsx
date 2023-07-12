import React, { useContext } from "react";
import { PostContext, UserContext } from "../App";
const Post = ({content,image,user,id}) => {

    
    // console.log(CurrentUser)

    const userValue = useContext(UserContext);


    const { dispatch } = useContext(PostContext)
    
    const CurrentUser = userValue == user;
    // console.log(CurrentUser);

    const  handleDelete  = () =>{
        if(window.confirm("are you sure you want to  delete this post?"))
        dispatch({ type: "DELETE_POST", payload: {postId :id }});

    }
    return (
        <>

        <h2>{content}</h2>
        {image &&  ( 
        <img src={URL.createObjectURL(image)} alt="" style={{width : 200}} />)}
       {user && <p style={{color : CurrentUser &&  "Blue"}}>{user}!</p>}
      { CurrentUser &&  <button onClick={handleDelete}>Delete</button>}
        </>
        
    )
}

export default Post;