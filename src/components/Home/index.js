// Write your JS code here
import './index.css'

const Home = () => {
  const homePage = (
    <div className="home-page-cont">
      <img
        className="home-img"
        src="https://assets.ccbp.in/frontend/react-js/home-blog-img.png "
        alt="home"
      />
      <h1 className="heading">Home</h1>
    </div>
  )
  return homePage
}

export default Home
