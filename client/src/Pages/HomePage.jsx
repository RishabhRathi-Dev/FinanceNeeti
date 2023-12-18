import React from "react";
import Navbar from "../components/Navbar.jsx";
import News from "../components/NewsSection";
import Posts from "../components/PostSection.jsx";
import Testimonial from "../components/Testimonial.jsx";
import ExpenseOptimizer from "../components/ExpenseOptimizer.jsx";
import Hero from "../components/Hero.jsx";
import Footer from "../components/Footer";
import AOS from "aos";
import "aos/dist/aos.css";

const lineStyle = {
  border: "none",
  borderTop: "1px solid navy",
  margin: 0,
};

export default function HomePage() {
  const [orderPopup, setOrderPopup] = React.useState(false);

  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup);
  };

  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);
  return (
    <>
      <Navbar handleOrderPopup={handleOrderPopup} />
      <hr style={lineStyle} />
      <Hero handleOrderPopup={handleOrderPopup} />
      <ExpenseOptimizer />
      <hr style={lineStyle} />
      <News handleOrderPopup={handleOrderPopup} />
      <Posts />
      <Testimonial />
      <Footer />
    </>
  );
}
