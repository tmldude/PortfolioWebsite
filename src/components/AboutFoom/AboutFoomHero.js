import "../../sass/main.scss";

const AboutFoomHero = () => {
  return (
    <section className="section-hero">
      <div className="row">
        <div className="col-1-of-2">
          <div className="parrallelogram">
            <div className="parrallelogram__shape parrallelogram__shape-1">
              <div className="parrallelogram__text">
                <h1 className="parrallelogram__h1">This Is</h1>
              </div>
            </div>
          </div>
        </div>
        <div className="col-1-of-2">
          <div className="parrallelogram">
            <div className="parrallelogram__shape parrallelogram__shape-2">
              <div className="parrallelogram__text">
                <h1 className="parrallelogram__h1">In Progress</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutFoomHero;
// <div className={classes['diagonal-box']}>
//   <div className={classes.content}>Hello</div>
// </div>
