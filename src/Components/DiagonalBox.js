import classes from "./DiagonalBox.module.css";

const DiagonalBox = () => {
  return (
    <div className={classes.row}>
      <div className={classes.item} style={{'background-color': '#9b9297'}}>
        1
      </div>
      <div className={classes.item} style={{'background-color': 'blue'}}>
        2
      </div>
      <div className={classes.triangle}>3</div>
    </div>
    
  );
};

export default DiagonalBox;
// <div className={classes['diagonal-box']}>
    //   <div className={classes.content}>Hello</div>
    // </div>