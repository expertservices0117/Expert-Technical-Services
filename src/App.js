import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import BasicExample from './components/Navbar';
import MainSection from './components/MainSection';
import Services from './components/Services';
import Whoweare from './components/Whoweare';
import CustomerReviews from './components/CustomerReviews';
import 'aos/dist/aos.css'; // Import AOS CSS
import { useEffect, useState } from 'react';
import AOS from 'aos'; // Import AOS functionality
import 'animate.css'; // Import Animate.css for animations
import Footer from './components/Footer';
import LetsConnect from './components/LetsConnect';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Initialize AOS when the component mounts
    AOS.init();

    // Simulate a loading time (e.g., 3 seconds)
    setTimeout(() => {
      setLoading(false);
    }, 2000); // Set this value based on your actual loading time or logic
  }, []);

  return (
    <>
      {loading ? (
        <div className="preloader">
          <div className="spinner"></div>
        </div>
      ) : (
        <>
          <BasicExample />
          <MainSection />
          <Services />
          <Whoweare />
          <LetsConnect/>
          <CustomerReviews />
          <Footer/>
        </>
      )}
    </>
  );
}

export default App;
