import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Header from '../components/Header.jsx';

class HeaderContainer extends React.Component {
  constructor(props) {
    super(props);
  };

  render() {
    return(
      <div>
        <Header
          user = {this.props.datoUser}
        />
      </div>
    )
  };
};

function mapStateToProps(state){
  return { datoUser: state.user };
};

export default connect(mapStateToProps, null)(HeaderContainer);
