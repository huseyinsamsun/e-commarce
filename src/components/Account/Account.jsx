import './Account.css'
import Login from './Login'
import Register from './Register'
const Account = () => {
  return (
   <section className="account-page">
  <div className="container">
    <div className="account-wrapper">
  <Login></Login>
  <Register></Register>
    </div>
  </div>
</section>

  )
}

export default Account