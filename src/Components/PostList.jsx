
import Post from '../Components/Post'

const PostList = ({posts} ) =>{

    return posts.map((post,index) => <Post key={index} {...post} />)
}

export default PostList;