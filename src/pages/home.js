import { Fragment } from "react";

// import Header from "../components/Header/Header";
import DiagonalBox from "../components/DiagonalBox";
import HeroSection from "../components/HeroSection/Hero";
// import TriangleAtBottom from '../components/Bottom/TriangleAtBottom';

const Home = () => {
  return (
    <Fragment>
      {/* <Header /> */}
      <main>
        <HeroSection></HeroSection>
        <DiagonalBox />
        
      </main>
      {/* <TriangleAtBottom/> */}
    </Fragment>
  );
};

export default Home;
