import './App.css';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Madeforyou from './components/Madeforyou';
import Mobileapp from './components/Mobileapp';
import Moments from './components/Moments';
import Listerning from './components/Listerning';
import Footer from './components/Footer';

function App() {
  return (
    <>
    <Navbar/>
    <Hero/>
    <Madeforyou/>
    <Mobileapp/>
    <Moments/>
    <Listerning/>
    <Footer/>
    </>
  );
}

export default App;
