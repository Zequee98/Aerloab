import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {cargarProductos} from '../redux/actions/actionCreator';

import Header from './Header.jsx'
import Productos from './Productos.jsx'
import ProductosContainer from '../containers/ProductosContainer.jsx'

class Main extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Productos />
      </div>
    )
  };
};

// function mapDispatchToProps(dispatch){
//   return bindActionCreators({cargarProductos}, dispatch);
// }
//
// export default connect(null, mapDispatchToProps)(Main);

export default Main;
