import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios';

function App() {
  // Creating a state variable called "activities" and a function to update it called "setActivities"
  const [activities, setActivities] = useState([]);

  // Using the "useEffect" hook to execute a side-effect in my component
  useEffect(() => {
    axios.get('http://localhost:5000/api/activities')
  })

  return (
    <div>
      <h1>Reactivities</h1>
    </div>
  )
}

export default App
