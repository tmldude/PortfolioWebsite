import { Fragment } from "react";
import "../../sass/main.scss";
import HomeFooter from "./HomeFooter";
import Introduction from "./Introduction";
import Projects from "./Projects";
// import ChessHero from "../Depreciated/OldHome";

const HomeHero = () => {
  return (
    <Fragment>
      <Introduction></Introduction>
      <Projects></Projects>
      <HomeFooter></HomeFooter>
      {/* <ChessHero></ChessHero> */}
    </Fragment>
  );
};

export default HomeHero;

