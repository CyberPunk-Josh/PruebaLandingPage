import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// components
import BarNav from './Components/BarNav';
import Hero from './Components/Hero';
import Video from './Components/VideoSection';
import Beneficios from './Components/Beneficios';
import Conoce from './Components/Conoce';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <BarNav />
      <Hero />
      <Video />
      <Beneficios/>
      <Conoce/>
      <Footer/>
    </div>
  );
}

export default App;
