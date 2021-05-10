import { Container } from '@material-ui/core';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Business from './Sections/Business/Business';
import Features from './Sections/Features/Features';
import Main from './Sections/Main/Main';

function App() {
  return (
    <Container maxWidth="xl" disableGutters>
      <Navbar/>
      <Main/>
      <Business/>
      <Features/>
    </Container>
  );
}

export default App;
