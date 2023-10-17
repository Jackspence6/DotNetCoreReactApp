import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios';

function App() {
  // Creating a state variable called "activities" and a function to update it called "setActivities"
  const [activities, setActivities] = useState([]);

  // Using the "useEffect" hook to execute a side-effect in my component
  useEffect(() => {
    axios.get('http://localhost:5001/api/activities')
      .then(Response => {
        setActivities(Response.data)
      })
    // Empty Array of dependencies 
  }, [])

  return (
    // The root div for this component
    <div>
      {/* Heading for the Reactivities list */}
      <h1>Reactivities</h1>

      {/* Unordered list that will contain the activities */}
      <ul>
        {/* Mapping over the "activities" state variable to generate list items */}
        {activities.map((activity: any) => (
          // Each list item has a unique "key" prop and displays the activity title
          <li key={activity.id}>
            {activity.title}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App
