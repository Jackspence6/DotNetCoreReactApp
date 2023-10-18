import { useEffect, useState } from 'react'
import axios from 'axios';
import { Header, List } from 'semantic-ui-react';
import { Activity } from '../models/activity';

function App() {
  // Creating a state variable called "activities" and a function to update it called "setActivities"
  const [activities, setActivities] = useState<Activity[]>([]);

  // Using the "useEffect" hook to execute a side-effect in my component
  useEffect(() => {
    axios.get<Activity[]>('http://localhost:5001/api/activities')
      .then(Response => {
        setActivities(Response.data)
      })
    // Empty Array of dependencies 
  }, [])

  return (
    // The root div for this component
    <div>
      {/* Heading for the Reactivities list */}
      <Header as='h2' icon='users' content='Reactivities' />
      {/* Unordered list that will contain the activities */}
      <List>
        {/* Mapping over the "activities" state variable to generate list items */}
        {activities.map(activity => (
          // Each list item has a unique "key" prop and displays the activity title
          <List.Item key={activity.id}>
            {activity.title}
          </List.Item>
        ))}
      </List>
    </div>
  )
}

export default App
