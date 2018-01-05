import React from 'react';

const Header = function(props){
  console.log('User', props.user)
  return(
    <div>
      <div className="divUserHead">
        <div className="datoUserName">
          <p> {props.user.name}</p>
        </div>
        <div className="divUserPoints">
          <div className="datoUserPoints">
            <p> {props.user.points}</p>
          </div>
        </div>
      </div>
      <div>
        <center>
          <h1> HEADER </h1>
        </center>
      </div>
    </div>
  )
};

export default Header;
