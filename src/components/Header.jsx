import React from 'react';

const Header = (props)=> {
  const { user } = props
  return(
    <div>
      <div className="containerHeader">
        <img className="logoAerolab" src="../../public/css/aerolab-logo"/>
          <div className="UserNameCss">
            <p> { user.name }</p>
          </div>
          <div className="divUserPoints">
          <div className="datoUserPoints">
            <div className="moneyContainer">
              <p> { user.points }</p>
              <div className="moneyDiv1">
                <div className="moneyDiv2">
                  <div className="moneyDiv3">
                  </div>
                </div>
              </div>
            </div>
          </div>
          </div>
      </div>
      <div className="divImageHeader">
        <img className="imageHeader" src="../../public/css/header-x1.png"/>
      </div>
    </div>
  )
};

export default Header;
