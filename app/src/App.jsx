import { useState } from "react";
import Header from "./Header/Header.jsx";
import Hero from "./Hero/Hero.jsx";
import Stack from "./Stack/Stack.jsx";
import Projects from "./Projects/Projects.jsx";
import Footer from "./Footer/Footer.jsx";
import Walkie from "./Walkie/Walkie.jsx";
import Quotes from "./Quote/Quotes.jsx";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <Hero />
      <Stack />
      <Projects />
      <Quotes />
      <Footer />
      <Walkie />
    </>
  );
}

export default App;
