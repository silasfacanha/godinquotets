import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import WisdomArea from "./components/WisdomArea";
import Godinwho from "./components/Godinwho";
import TheDev from "./components/TheDev";
import Footer from "./components/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Navbar />
      <Hero />
      <WisdomArea />
      <Godinwho />
      <TheDev />
      <Footer />
    </div>
  );
}

export default App;
