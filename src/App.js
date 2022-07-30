import { Fragment } from 'react';

import Header from "./Components/Header/Header";
import DiagonalBox from "./Components/DiagonalBox";
import TriangleAtBottom from './Components/Bottom/TriangleAtBottom';

function App() {
  return (
    <Fragment>
      <Header />
      <main>
        <DiagonalBox />
      </main>
      <TriangleAtBottom/>
    </Fragment>
  );
}

export default App;
