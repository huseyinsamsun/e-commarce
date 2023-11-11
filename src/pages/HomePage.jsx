import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import Policy from '../components/Policy/Policy'
import Slider from '../components/Slider/Slider'
import Categories from '../components/Category/Categories'
import Products from '../components/Product/Products'
import Campaigns from '../components/Campaign/Campaigns'

import Blogs from '../components/Blog/Blogs'
import BrandItems from '../components/Brand/BrandItems'
import CampaignSingle from '../components/CampaignSingle/CampaignSingle'


const HomePage = () => {
  return (
      <><Header></Header><Slider></Slider><Categories></Categories><Products></Products><Campaigns></Campaigns><Blogs></Blogs><BrandItems></BrandItems><CampaignSingle></CampaignSingle><Policy></Policy><Footer></Footer></>
  )
}

export default HomePage