// import React from 'react';
// import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
// import { cargarProductos } from '../redux/actions/actionCreator';
//
// import Productos from '../components/Productos.jsx';
//
// class ProductosContainer extends React.Component {
//   constructor(props){
//     super(props);
//   };
//
//   render() {
//     return(
//       <Productos
//         datoProducto = { this.props.datoProducto }
//       />
//     )
//   };
// };
//
// function mapStateToProps(state){
//   return { datoProducto: state.productos };
// }
//
// function mapDispatchToProps(dispatch){
//   return bindActionCreators(cargarProductos, dispatch);
// }
//
// export default connect(mapStateToProps, mapDispatchToProps)(ProductosContainer);
