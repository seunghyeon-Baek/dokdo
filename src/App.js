import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import NavBar from './components/NavBar';
import Swiper from './components/Swiper';
import CardView from './components/CardView';
import Center from './components/Center';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
     <NavBar />
     <Swiper />
     <CardView />
     <Center />
     <Footer />
    </div>
  );
}

export default App;
