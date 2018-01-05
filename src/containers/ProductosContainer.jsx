import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {cargarProductos, adquirirProducto} from '../redux/actions/actionCreator.js';
import {canjearProductos} from '../redux/actions/userActionCreator.js';
import {getHistoryUser} from '../redux/actions/productActionCreator.js';

import Productos from '../components/Productos.jsx';

class ProductosContainer extends React.Component {
  constructor(props) {
    super(props);
    this.acquireProduct = this.acquireProduct.bind(this);
    this.getHistory = this.getHistory.bind(this);
  };

  componentDidMount() {
    this.props.cargarProductos();
  };

  acquireProduct(product) {
    // this.props.adquirirProducto(product);
    this.props.canjearProductos(product);
  };

  getHistory(){
    this.props.getHistoryUser();
  }

  render() {
    // if(!this.props.datoProducto[2]) return (<div> Cargando </div>);
    return(
      <div>
        <Productos
          datoProducto = { this.props.datoProducto }
          user = {this.props.user}
          acquireProduct = {this.acquireProduct}
          getHistory = {this.getHistory}
        />
      </div>
    )
  };
};

function mapStateToProps(state){
  return { datoProducto: state.productos, user: state.user };
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({cargarProductos, adquirirProducto, canjearProductos, getHistoryUser}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductosContainer);
