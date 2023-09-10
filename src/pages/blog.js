import { BlogFactory } from "@blogfactory/core";
import { useEffect, useState } from "react";

const blogFactory = new BlogFactory("[YOUR_PROJECT_ID]");

function Blog() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await blogFactory.listPosts();

        setPosts(data.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, []);
  return (
    <div style={{ margin: "2rem" }}>
      <h2>Blog</h2>
      {posts.map((p) => (
        <a
          href={`/blog/${p.urlSlug}`}
          key={p.id}
          style={{ textDecoration: "underline" }}
        >
          {p.title}
        </a>
      ))}
    </div>
  );
}

export default Blog;
