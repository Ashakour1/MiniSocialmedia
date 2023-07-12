 import { useEffect, useState , createContext,useContext , useReducer} from 'react';
import Login from './Components/Login';
import Header from './Components/Header';
import CreatePost from './Components/CreatePost';
import PostList from './Components/PostList'
import postReducer  from './postReducer';

export const UserContext  = createContext();


export const PostContext =  createContext({
    posts : []
});

 const App = () => {


//    2Hooks user, posts 
    const [user,setUser] = useState ("Abdi");

    const [posts,setPosts] = useState([]);


    // context

    const initialPostState = useContext(PostContext);
    
// i using  useReducer 
    const [state, dispatch] = useReducer(postReducer,initialPostState);

useEffect(() =>{
    document.title = user ? `${user} feed` : "login";
},[user])

    if(!user ) return <Login setUser ={setUser}/>

    return (
        <PostContext.Provider value={{state, dispatch}}>
        <UserContext.Provider value={user}>
         <Header setUser={setUser}/>
        <CreatePost  user={user} />
        
      <PostList posts={state.posts}/>
        </UserContext.Provider>
        </PostContext.Provider>
       
      

    );

   
};

export default App;