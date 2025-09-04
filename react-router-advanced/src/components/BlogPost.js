import { useParams } from "react-router-dom";

const BlogPost = () => {
  const { Id } = useParams();

  return (
    <div>
      <h1>Blog Post</h1>
      <p>Showing blog post with ID: {Id}</p>
    </div>
  );
};

export default BlogPost;
