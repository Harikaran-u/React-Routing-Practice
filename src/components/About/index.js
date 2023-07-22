// Write your JS code here
import './index.css'

const About = () => {
  const aboutPage = (
    <div className="about-page-cont">
      <img
        src="https://assets.ccbp.in/frontend/react-js/about-blog-img.png"
        alt="about"
        className="about-img"
      />
      <h1 className="about-text">About</h1>
      <p className="description">
        I love to create !. I am a front-end web developer
      </p>
    </div>
  )
  return aboutPage
}

export default About
