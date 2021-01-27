import { Link } from "react-router-dom";

const BlogList = ({ blogs, handle}) => {
    return (
      <div className="blog-list">
        {blogs.map(blog => (
          <div className="blog-preview" key={blog.id} >
            <Link to = {`blogs/${blog.id}`}>
            <h2>{ blog.title }</h2>
            <p>Written by { blog.author }</p>
            </Link>
            <button onClick = {() => handle(blog.id)} >Delete Me</button>
          </div>
        ))}
      </div>
    );
  }
   
  export default BlogList;