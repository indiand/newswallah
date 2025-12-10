import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
import Navbar from './components/Navbar.js';
import Home from './components/Home.js';
import AboutDeveloper from './components/AboutDeveloper.js';
import Footer from './components/Footer.js';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'
import News from './components/News.js';
function App() {
  return (
    <>
    <Router>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/about" element={<AboutDeveloper />}/>
          <Route path="/topheadlines" element={<News key="topheadlines" category="topheadlines"/>}/>
          <Route path="/sports" element={<News key="sports" category="sports"/>}/>
          <Route path="/entertainment" element={<News key="entertainment" category="entertainment"/>}/>
          <Route path="/business" element={<News key="business" category="business"/>}/>
        </Routes>
    </Router>
    <Footer />
    </>
  );
}

export default App;
