import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {getHistoryUser} from '../redux/actions/userActionCreator.js';
import {acquireProduct, listHightPrice, listLowestPrice, mostRecent, changePage, getProducts} from '../redux/actions/productActionCreator.js';
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
    let pages = this.divPages(this.props.datoProducto);
    return(
      <div>
        <div className="containerButton">
          <p className="textListProdct">{(this.props.loadPage) ? '32' : '16'} of 32 products</p>
            <div className='divProductSort'></div>
          <p className="SortButton">Sort By:</p>
          <button className="botonPrueba" onClick = {()=> this.props.getProducts()}>
            mostRecent
          </button>
          <button className="botonNoMarcado" onClick = {()=> this.props.listHightPrice(this.props.datoProducto)}>
            highestPrice
          </button>
          <button className="botonNoMarcado" onClick = {()=> this.props.listLowestPrice(this.props.datoProducto)}>
            lowestPrice
          </button>
          <button onClick={()=> this.props.changePage(this.props.loadPage)}>
            {(this.props.loadPage) ? 'Previous page' : 'Next page'}
          </button>
        </div>

        <div className='divProductPr'></div>

        {(pages) ?
          <div>
            <Productos
              datoProducto = {(this.props.loadPage) ? pages[1] : pages[0]}
              user = {this.props.user}
              acquireProduct = {this.acquireProduct}
              getHistory = {this.getHistory}
            />
          </div>
          :
          <div>
            <p> Cargando ... </p>
          </div>
        }
      </div>
    )
  };
};

function mapStateToProps(state){
  return { datoProducto: state.productos, user: state.user, loadPage: state.pageChange };
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({changePage, acquireProduct, getHistoryUser, listHightPrice, listLowestPrice, mostRecent, getProducts}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductosContainer);
