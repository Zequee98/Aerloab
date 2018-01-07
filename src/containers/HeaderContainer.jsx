import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {cargarProductos, adquirirProducto} from '../redux/actions/actionCreator.js';

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
  return { datoUser: state.user, loadPage: state.loadPage };
}

// function mapDispatchToProps(dispatch){
//   return bindActionCreators({cargarProductos, adquirirProducto}, dispatch);
// }

export default connect(mapStateToProps, null)(HeaderContainer);
