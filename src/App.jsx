import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar'
import About from './components/About.tsx';
import Contact from './components/Contact';
import Home from './components/Home';
import NDRFDashboard from './components/NDRFDashboard';
import { LoaderTwo } from './components/LoaderOne.jsx';
import { useEffect,useState } from 'react';
import EarthLoader from './components/EarthLoader.jsx';

function App() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3700);
    return () => clearTimeout(timer);
  }, []);
    if (loading) {
    return <LoaderTwo/>;
  }

  return (
    < >
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/ndrf" element={<NDRFDashboard />} />
      </Routes>
    </>
  )
}

export default App
