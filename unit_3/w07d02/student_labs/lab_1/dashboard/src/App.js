import {useState} from "react"
import './App.css'

function App() {
  const [reviews, setReviews] = useState(1281)
  const [rating, setRating] = useState(4.6)
  const [analysis, setAnalysis] = useState([960, 122, 321])
  const [vistors, setVistors] = useState(821)

  const listArr = analysis.map(num => <li>{num}</li>)

  return (
  <div className="flex">
    <div className="sidebar">
      <ul>
        <li>Dashboard</li>
        <li>Widget</li>
        <li>Reviews</li>
        <li>Customers</li>
        <li>Online Analysis</li>
        <li>Settings</li>
      </ul>
    </div>

    <div className="main">
      <ul className="flex-row">
          <li>
            <p>Reviews</p>
            <h3>{reviews}</h3>
          </li>
          <li>
            <p>Average Rating</p>
            <h3>{rating}</h3>
          </li>
          <li>
            <p>Sentiment Analysis</p>
            <h3 className="list">{listArr}</h3>
          </li>
      </ul>

      <div className="vist">
        <p>Website Visitors</p>
        <h3>{vistors}</h3>
        <div className="gray"></div>
      </div>
    </div>
    
  </div>
  );
}

export default App;
