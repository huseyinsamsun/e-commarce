import React from 'react'
import Categories from '../components/Category/Categories'
import Header from '../components/Header/Header'
import Products from '../components/Product/Products'
import CampaignSingle from '../components/CampaignSingle/CampaignSingle'
import Policy from '../components/Policy/Policy'
import Footer from '../components/Footer/Footer'

const ShopPage = () => {
  return (
    <React.Fragment>
        <Header></Header>     
        <Categories></Categories>
        <Products></Products>
        <CampaignSingle></CampaignSingle>
        <Products></Products>
        <Policy></Policy>
        <Footer></Footer>

    </React.Fragment>
  )
}

export default ShopPage