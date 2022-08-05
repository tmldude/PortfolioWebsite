import "../sass/main.scss";

const DiagonalBox = () => {
  return (
    <section className="section-hero">
      <div className="row">
        <div className="col-1-of-2">
          <div className="parrallelogram">
            <div className="parrallelogram__shape">CS</div>
          </div>
        </div>
        <div className="col-1-of-2">
          <div className="parrallelogram">
            <div className="parrallelogram__shape">Psych</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DiagonalBox;
// <div className={classes['diagonal-box']}>
//   <div className={classes.content}>Hello</div>
// </div>
