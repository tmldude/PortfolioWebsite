import React, { useContext } from "react";
import "../../sass/main.scss";

import FoomContext from "./FoomConext";
import FoomForm from "./FoomForm";
import FoomOutput from "./FoomOutput";

const FoomWrapper = () => {
  const ctx = useContext(FoomContext);
  return (
    <div className="boogle-background">
      <FoomForm></FoomForm>
      <hr className="solid-black-hr" />
      {ctx.showSearches ? (
        <FoomOutput></FoomOutput>
      ) : (
        <div className="conditonal-foom">
          <h1 className="conditonal-foom__h1">Type something above</h1>
          <h2 className="conditonal-foom__h2">
            This will scrape the first 10 links of google and populate here! I
            am working on a better webscraping algorithm and corresponding
            visuals. This is a basic version of a long term work in progress.
          </h2>
        </div>
      )}
    </div>
  );
};

export default FoomWrapper;

// const Foom = () => {
//   const [showSearches, setShowSearches] = useState(false);
//   const [isLoading, setIsLoading] = useState(true)

//   const searchHandler = (e) => {
//     //e.preventDefault()
//     console.log(showSearches);
//     setShowSearches(true);
//     console.log(showSearches);
//   };

//   const setLoadingHandlerTrue = (e) => {
//     setIsLoading(true)
//   }
//   const setLoadingHandlerFalse = (e) => {
//     setIsLoading(false)
//   }

//   return (
//     <div className="boogle-background">
//       <FoomForm isLoadingTrue={setLoadingHandlerTrue} isLoadingFalse={setLoadingHandlerFalse} sendSearchHandler={searchHandler}></FoomForm>
//       <hr className="solid-black-hr" />
//       {showSearches ? (
//         <FoomOutput isLoadingTrue={setLoadingHandlerTrue} isLoadingFalse={setLoadingHandlerFalse} isLoading={isLoading} howSearch={showSearches}></FoomOutput>
//       ) : (
//         <div>
//           <h1>Type something above</h1>
//           <h2>This will scrape the first 10 links of google and populate</h2>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Foom;
