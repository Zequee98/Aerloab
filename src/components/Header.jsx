import React from 'react';

const Header = (props)=> {
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
      <div className="divImageHeader">
        <img className="imageHeader" src="../../public/css/header-x1.png" title="HEADER"/>
      </div>
      <button>Next page</button>
    </div>
  )
};

export default Header;
