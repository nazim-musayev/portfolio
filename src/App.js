import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Header from './components/Header';
import Drawer from './components/Drawer';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';
import Footer from './components/Footer';
import SnackBar from './components/SnackBar';
import Cv from './components/Cv';
import { useState } from 'react';


const App = () => {
  const [drawer, setDrawer] = useState(false);
  const [snackBar, setSnackBar] = useState(false);

  const handleDrawer = () => {
    setDrawer(!drawer)
  };

  const handleSnackBar = () => {
    setSnackBar(!snackBar)
  };

  return (
    <Router>
      <div>
        <Header handleDrawer={handleDrawer}/>
        <Drawer drawer={drawer} handleDrawer={handleDrawer} />
        <Container>
          <Switch>
            <Route exact path="/">
              <About />     
            </Route>
            <Route path="/projects">
              <Projects />
            </Route>
            <Route path="/contact">    
              <Contact handleSnackBar={handleSnackBar} />   
            </Route>
          </Switch>
        </Container>
        <Box zIndex={1} position="fixed" bottom={50} right={10} >
          <Cv />
        </Box>
        <Footer />
        <SnackBar snackBar={snackBar} handleSnackBar={handleSnackBar} />
      </div>
    </Router>
  )
};

export default App;
