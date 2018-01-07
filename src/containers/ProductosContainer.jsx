import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {getHistoryUser} from '../redux/actions/userActionCreator.js';
import {acquireProduct, listHightPrice, listLowestPrice, mostRecent} from '../redux/actions/productActionCreator.js';
import {cargarProductos} from '../redux/actions/actionCreator.js';

import Productos from '../components/Productos.jsx';

class ProductosContainer extends React.Component {
  constructor(props) {
    super(props);
    this.acquireProduct = this.acquireProduct.bind(this);
    this.getHistory = this.getHistory.bind(this);
    this.divPages = this.divPages.bind(this);
  };

  acquireProduct(product) {
    this.props.acquireProduct(product);
  };

  getHistory() {
    this.props.getHistoryUser();
  }

  divPages(array) {
    let pag1 = []
    if(array.length > 16) {
      pag1.push(array.slice(0,16));
      pag1.push(array.slice(16));
  	  return pag1;
    }
  }

  render() {
    const pages = this.divPages(this.props.datoProducto);
    console.log('pages', pages);
    return(
      <div>

        <div>
          <button className="botonPrueba" onClick = {()=> this.props.cargarProductos()}> mostRecent </button>
          <button className="botonPrueba" onClick = {()=> this.props.listHightPrice(this.props.datoProducto)}> highestPrice </button>
          <button className="botonPrueba" onClick = {()=> this.props.listLowestPrice(this.props.datoProducto)}> lowestPrice </button>
        </div>

        {(pages) ?
          <div>
            <Productos
              datoProducto = { pages[0] }
              user = {this.props.user}
              acquireProduct = {this.acquireProduct}
              getHistory = {this.getHistory}
            />
          </div>
          :
          <div>
            <p> loadding</p>
          </div>
        }
      </div>
    )
  };
};

function mapStateToProps(state){
  return { datoProducto: state.productos, user: state.user };
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({acquireProduct, getHistoryUser, listHightPrice, listLowestPrice, mostRecent, cargarProductos}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductosContainer);
