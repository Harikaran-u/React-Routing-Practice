// Write your JS code here
import './index.css'

const NotFound = () => {
  const notFoundPage = (
    <div className="not-found-page">
      <img
        src="https://assets.ccbp.in/frontend/react-js/not-found-blog-img.png"
        alt="not found"
        className="not-found-img"
      />
      <h1 className="not-found-text">Not Found</h1>
    </div>
  )
  return notFoundPage
}

export default NotFound
