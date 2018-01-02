import React from 'react';

import datoUser from '../../datoUser.js';

class Header extends React.Component {
  render() {
    return(
      <div>
        <div className="divUserHead">
          <div className="datoUserName">
            <p> {datoUser.name}</p>
          </div>
          <div className="divUserPoints">
            <div className="datoUserPoints">
              <p> {datoUser.points}</p>
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
  }
}

export default Header;
