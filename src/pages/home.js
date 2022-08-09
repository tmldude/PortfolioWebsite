import { Fragment } from "react";

import DiagonalBox from "../components/DiagonalBox";
import HeroSection from "../components/HeroSection/Hero";
import Introduction from "../components/Introduction/Introduction";
// import TriangleAtBottom from '../components/Bottom/TriangleAtBottom';

const Home = () => {
  return (
    <Fragment>
      <main>
        <Introduction />
        <HeroSection></HeroSection>
        <DiagonalBox />
      </main>
      {/* <TriangleAtBottom /> */}
    </Fragment>
  );
};

export default Home;
