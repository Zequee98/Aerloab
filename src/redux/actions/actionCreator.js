import axios from 'axios';

import datoProducto from '../../../datoProducto';
import datoUser from '../../../datoUser';

function traerProductos(productos) {
  return {
    type: 'LIST_PRODUCTS',
    productos,
  };
};

function restarPuntosUser(price){
  return {
    type: 'RESTAR_PUNTOS',
    price,
  }
}

export function cargarProductos() {
  return(dispatch)=> {
    dispatch(traerProductos(datoProducto))
  };
};

function comprarProducto(productPrice) {
  return(dispatch)=> {
    dispatch(restarPuntosUser(productPrice))
  };
};


function canjearProductos() {
  return(dispatch)=> {
    return axios({
      method: 'POST',
      url: 'https://aerolab-challenge.now.sh/redeem',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': 'Bearer YOUR_TOKEN'
      },
      body: "{  \"productId\": \"5a033eeb364bf301523e9b92\"}"
      }, function (error, response, body) {
        console.log('Status:', response.statusCode);
        console.log('Headers:', JSON.stringify(response.headers));
        console.log('Response:', body);
    }).then(algo => {
      console.log('algo...')
    })
  };
};
