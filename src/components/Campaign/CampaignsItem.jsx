import './CampaignsItem.css'

const CampaignsItem = () => {
  return (
    <div className="campaigns-wrapper">
      <div className="campaign-item">
        <h3 className="campaign-title">Fashion Month <br />
          Ready in Capital <br />
          Shop</h3>
        <p className="campaign-desc">Lorem ipsum dolor sit amet consectetur adipiscing elit dolor</p>
        <a href="#" className="btn btn-primary">
          View All
          <i className="bi bi-arrow-right" />
        </a>
      </div>
      <div className="campaign-item">
        <h3 className="campaign-title">Fashion Month <br />
          Ready in Capital <br />
          Shop</h3>
        <p className="campaign-desc">Lorem ipsum dolor sit amet consectetur adipiscing elit dolor</p>
        <a href="#" className="btn btn-primary">
          View All
          <i className="bi bi-arrow-right" />
        </a>
      </div>
    </div>
  )
}

export default CampaignsItem