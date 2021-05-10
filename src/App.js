import { Container } from '@material-ui/core';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Business from './Sections/Business/Business';
import Features from './Sections/Features/Features';
import Main from './Sections/Main/Main';
import Roadmap from './Sections/Roadmap/Roadmap';
import Tokens from './Sections/Tokens/Tokens';
import Contact from './Sections/Contact/Contact';

function App() {
  return (
    <Container maxWidth="xl" disableGutters>
      <Navbar/>
      <Main/>
      <Business/>
      <Features/>
      <Tokens/>
      <Roadmap/>
      <Contact/>
    </Container>
  );
}

export default App;
