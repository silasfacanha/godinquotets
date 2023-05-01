
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import WisdomArea from "./components/WisdomArea";
import Godinwho from "./components/Godinwho";
import TheDev from "./components/TheDev";
import Footer from "./components/Footer";
import { BrowserRouter } from "react-router-dom";

function App() {
 

  return (
    <BrowserRouter> 
    <div className="App font-courier overflow-x-hidden">
       
      <Navbar />
      
      <div id="home">
      <Hero />
      </div>
      <div id= "wisdom">
      <WisdomArea />
      </div>
      <div id="godin">
      <Godinwho />
      </div>
      <div id="dev">
      <TheDev />
      </div>
      
      <Footer />
      
    </div>
    </BrowserRouter>
  );
}

export default App;
