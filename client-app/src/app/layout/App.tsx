import { useEffect } from 'react'
import { Container } from 'semantic-ui-react';
import NavBar from './NavBar';
import ActivityDashboard from '../../features/activities/dashboard/ActivityDashboard';
import LoadingComponent from './LoadingComponent';
import { useStore } from '../stores/store';
import { observer } from 'mobx-react-lite';

function App() {
  const { activityStore } = useStore();

  // Using the "useEffect" hook to execute a side-effect in my component
  useEffect(() => {
    activityStore.loadActivities();
    // Empty Array of dependencies 
  }, [activityStore])

  if (activityStore.loadingInitial)
    return <LoadingComponent content='Loading app...' />

  return (
    // The root div for this component
    <>
      {/* Heading for the Reactivities list */}
      <NavBar />
      <Container style={{ marginTop: "7em" }}>
        <ActivityDashboard />
      </Container>
    </>
  );
}

export default observer(App);
