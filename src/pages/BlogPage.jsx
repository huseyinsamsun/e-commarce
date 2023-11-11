import Header from "../components/Header/Header";
import Blogs from "../components/Blog/Blogs";
import React from "react";
import Footer from "../components/Footer/Footer";
const BlogPage = () => {
  return (
    <React.Fragment>
      <Header></Header>
      <div className="blog-page">
      <Blogs></Blogs>
      </div>

      <Footer></Footer>
    </React.Fragment>
  );
};

export default BlogPage;
