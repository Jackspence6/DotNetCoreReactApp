import { useEffect, useState } from 'react'
import axios from 'axios';
import { Container } from 'semantic-ui-react';
import { Activity } from '../models/activity';
import NavBar from './NavBar';
import ActivityDashboard from '../../features/activities/dashboard/ActivityDashboard';

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
    <>
      {/* Heading for the Reactivities list */}
      <NavBar />
      <Container style={{ marginTop: "7em" }}>
        <ActivityDashboard activities={activities} />
      </Container>
    </>
  )
}

export default App
