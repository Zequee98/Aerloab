//
//     Esto lo usaba de prueba para no gastar el token con pedidos. 
//

// import axios from 'axios';
//
// import datoProducto from '../../../datoProducto';
// import datoUser from '../../../datoUser';
//
// function traerProductos(products) {
//   return {
//     type: 'LIST_PRODUCTS',
//     products,
//   };
// };
//
// function restarPuntosUser(price){
//   return {
//     type: 'RESTAR_PUNTOS',
//     price,
//   };
// };
//
// export function agregarHistorial(product) {
//   return {
//     type: 'ADD_HISTORY',
//     product
//   }
// }
//
// export function cargarProductos() {
//   return(dispatch)=> {
//     dispatch(traerProductos(datoProducto))
//   }
// };
//
// export function adquirirProducto(productPrice, product) {
//   return(dispatch)=> {
//     dispatch(restarPuntosUser(productPrice))
//     dispatch(agregarHistorial(product))
//   };
// };
//
// function agregarUser(user) {
//   return {
//     type: 'REQ_USER',
//     user,
//   }
// };
//
//
// export function agregarUserState() {
//   return(dispatch)=> {
//     dispatch(agregarUser(datoUser))
//   }
// };
