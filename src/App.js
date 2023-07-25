import Header from './components/Header';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './pages/Home';
import Galerie from './pages/Galerie';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <Header />
        <Switch>
        <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/galerie">
            <Galerie />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      <Footer />
    </Router>
  )
}

export default App;
