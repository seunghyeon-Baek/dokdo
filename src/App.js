import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import NavBar from './components/NavBar';
import Swiper from './components/Swiper';
import CardView from './components/CardView';
import Center from './components/Center';
import Banner from './components/Banner';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
     <NavBar />
     <Swiper />
     <CardView />
     <Center />
     <Banner />
     <Footer />
    </div>
  );
}

export default App;
