import "../../sass/main.scss";

const HomeHero = () => {
  return (
    <section className="section-hero">
      <div className="row">
        <div className="col-1-of-2">
          <div className="parrallelogram">
            <div className="parrallelogram__shape parrallelogram__shape-1">
              <div className="parrallelogram__text">
                <h1 className="parrallelogram__h1">Hmmm</h1>
              </div>
            </div>
          </div>
        </div>
        <div className="col-1-of-2">
          <div className="parrallelogram">
            <div className="parrallelogram__shape parrallelogram__shape-2">
              <div className="parrallelogram__text">
                <h1 className="parrallelogram__h1">heelo</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeHero;
// <div className={classes['diagonal-box']}>
//   <div className={classes.content}>Hello</div>
// </div>
