import CategoriesItem from "./CategoriesItem"
import './Categories.css'

const Categories = () => {
  return (
    <section className="categories">
 <div className="container">
  <div className="section-title">
    <h2>All Categories</h2>
    <p>Summer Collection New Morden Design</p>
  </div>
  <ul className="category-list">
<CategoriesItem></CategoriesItem>
  </ul>
</div>
</section>  

  )
}

export default Categories