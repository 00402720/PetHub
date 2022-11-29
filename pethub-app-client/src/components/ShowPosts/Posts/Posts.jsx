import ShowPosts from '../ShowPosts'

const Posts = ({ posts = [] }) => {
    const mappedPosts = posts.map(post => {
      return(
        <ShowPosts 
          key = {post._id}
          title = {post.title}
          description = {post.description}
          image = {post.image}
        />
      );
    })
    return (
        <>
        {mappedPosts}
        </>
    )
}

export default Posts;