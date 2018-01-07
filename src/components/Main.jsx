import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
// import {getUser} from '../redux/actions/userActionCreator';
// import {getProducts} from '../redux/actions/productActionCreator';

import {agregarUserState, cargarProductos} from '../redux/actions/actionCreator.js';

import HeaderContainer from '../containers/HeaderContainer.jsx'

class Main extends React.Component {
  componentDidMount(){
    this.props.agregarUserState();
    this.props.cargarProductos();
  };

  render() {
    return (
      <div>
        <HeaderContainer />
          <div>
            {React.cloneElement(this.props.children, this.props)}
          </div>
      </div>
    )
  };
};

function mapDispatchToProps(dispatch){
  return bindActionCreators({agregarUserState, cargarProductos}, dispatch);
}

export default connect(null, mapDispatchToProps)(Main);

// export default Main;
