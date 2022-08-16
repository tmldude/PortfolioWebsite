import { Fragment } from "react";

import HomeHero from "../components/Home/HomeHero";
// import Introduction from "../components/Introduction/Introduction";
// import TriangleAtBottom from '../components/Depreciated/TriangleAtBottom';

const Home = () => {
  return (
    <Fragment>
      <main>
        <HomeHero />
      </main>
      {/* <TriangleAtBottom /> */}
    </Fragment>
  );
};

export default Home;
