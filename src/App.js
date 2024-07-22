import Contact from "./components/Contact/contact";
import Footer from "./components/Footer/footer";
import Navbar from "./components/NavBar/navbar";
import Portfolio from "./components/Portfolio/portfolio";
import Skillset from './components/Skillset/skillset';
import Start from "./components/Start/start";

function App() {
  return (
    <div className="App">
      <Navbar/> 
      <Start/>
      <Skillset/>
      <Portfolio/>
      <Contact/> 
      <Footer/>
    </div>
  );
}

export default App;
