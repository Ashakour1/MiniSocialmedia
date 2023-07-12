import React, { useState , useRef, useContext } from "react";


import { PostContext } from "../App";


const CreatePost = ({user,posts , setPosts, }) =>{

    // user from app using context from context object and set posts

   
    // structuring 
    const [content,setContent] = useState("");
    const [image,setImage] = useState(null);


    const {dispatch} = useContext(PostContext)

    // console.log(postControll);


    // reference 
    const contentRef = useRef();
    const imageRef =  useRef();

   

    const handleSubmit = (event) =>{
        event.preventDefault();
        // console.log(posts)

       const newPost = {content,image,user , id : Date.now()};
        // setPosts([newPost,...posts]);

        dispatch({ type: "ADD_NEW_POST",payload:{post: newPost}});

       
        setContent("")
        setImage(null);
        imageRef.current.value = "";
        contentRef.current.focus();
    }



    return (
        <div>

            <h1>Createpost</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Post Title"
                onChange={(e) => setContent(e.target.value)}
                
                value={content}
                ref={contentRef}
                />
                <input type="file" 
                onChange={(e) => setImage(e.target.files[0])}
                ref={imageRef}
                
                />
                <button type="submit">submit</button>
            </form>
            
        </div>
    )
}

export default CreatePost;