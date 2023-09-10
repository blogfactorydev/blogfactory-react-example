import { BlogFactory } from "@blogfactory/core";
import { BlogFactoryPostPage } from "@blogfactory/react";
import { useParams } from "react-router-dom";

const blogFactory = new BlogFactory("[YOUR_PROJECT_ID]");

const BlogPost = () => {
  let { urlSlug } = useParams();
  return <BlogFactoryPostPage factory={blogFactory} urlSlug={urlSlug} />;
};

export default BlogPost;
