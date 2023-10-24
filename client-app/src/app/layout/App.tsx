import { Container } from 'semantic-ui-react';
import NavBar from './NavBar';
import { observer } from 'mobx-react-lite';
import { Outlet, useLocation } from 'react-router-dom';
import HomePage from '../../features/home/HomePage';
import { ToastContainer } from 'react-toastify';

function App() {
  const location = useLocation();

  return (
    // The root div for this component
    <>
      <ToastContainer position='bottom-right' hideProgressBar theme='colored' />
      {location.pathname === "/" ? <HomePage /> : (
        <>
          {/* Heading for the Reactivities list */}
          <NavBar />
          <Container style={{ marginTop: "7em" }}>
            <Outlet />
          </Container>
        </>
      )}
    </>
  );
}

export default observer(App);
