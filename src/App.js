import { Container } from '@material-ui/core';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Main from './Sections/Main/Main';

function App() {
  return (
    <Container maxWidth="xl" disableGutters>
      <Navbar/>
      <Main/>
    </Container>
  );
}

export default App;
