import { Container } from '@material-ui/core';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Business from './Sections/Business/Business';
import Main from './Sections/Main/Main';

function App() {
  return (
    <Container maxWidth="xl" disableGutters>
      <Navbar/>
      <Main/>
      <Business/>
    </Container>
  );
}

export default App;
