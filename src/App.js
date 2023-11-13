import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { Navbar } from './components/Navbar';
import Home from './pages/home/Home';
import {About} from './pages/about/About';
import {Gallery} from './pages/gallery/Gallery';
import {Plans} from './pages/plans/Plans';
import {Trainers} from './pages/trainers/Trainers';
import {Contact} from './pages/contact/Contact';
import { Footer } from './components/Footer';
import '../src/pages/home/home.css'
import { NotFound } from './pages/notFound/NotFound';


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='about' element={<About />} />
          <Route exact path='gallery' element={<Gallery />} />
          <Route exact path='plans' element={<Plans />} />
          <Route exact path='trainers' element={<Trainers />} />
          <Route exact path='contact' element={<Contact />} />
          <Route exact path='notFound' element={<NotFound />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
