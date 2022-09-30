const  Player = (props) => {
    return (
        // class name of x for X player, class name of o for O player
        <div className={props.whichPlayer}>
      {/* whichPlayer prop came from App.js, where we defined it */}
        <h2>Player {props.whichPlayer} </h2>
        <h3>Wins: </h3>
      </div>
    );
  }
 
  export default Player;