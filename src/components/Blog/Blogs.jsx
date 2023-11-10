import BlogItems from './BlogItems';
import './Blogs.css'
const Blogs = () => {
  return (
    <section className="blogs blog-page">
      <div className="container">
        <div className="section-title">
          <h2>From Our Blog</h2>
          <p>Summer Collection New Morden Design</p>
        </div>
 <BlogItems></BlogItems>
      </div>
    </section>
  );
};

export default Blogs;
