import { useState } from "react";
import "./App.css";
import Navbar from "./components/Header";
import Hero from "./components/HeroSection";
import Card from "./components/CardSection";
import DoctorCard from "./components/DoctorCard";
import Footer from "./components/footer";
import AboutUs from "./components/AboutUs";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <Hero />
      <AboutUs />
      <Card />
      <DoctorCard />
      <Footer />
    </>
  );
}

export default App;
