import './App.css';
import { NavBar } from './components/Navbar';
import { Banner } from './components/Banner';
import { Price } from './components/Price';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Price />
    </div>
  );
}

export default App;
