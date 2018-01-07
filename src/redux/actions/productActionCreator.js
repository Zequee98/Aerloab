import axios from 'axios';

function addProducts(products) {
  return {
    type: 'LIST_PRODUCTS',
    products
  };
};

function changeProducts(products) {
  return {
    type: 'CHANGE_LIST',
    products
  };
};

export function listLowestPrice(products){
  return(dispatch)=> {
    let lowestPrice = products.map(product => product).sort((a, b) => a.cost - b.cost);
    return dispatch(changeProducts(lowestPrice));
  };
};

export function listHightPrice(products) {
  return(dispatch)=> {
    let highestPrice = products.map(product => product).sort((a, b) => b.cost - a.cost);
    return dispatch(changeProducts(highestPrice));
  };
};

export function getProducts() {
  return(dispatch)=> {
    return axios({
      method: 'GET',
      url: 'https://aerolab-challenge.now.sh/products',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1YTQ2NGVjNWQ4MGVjYzAwNTg0NTM4ZmMiLCJpYXQiOjE1MTQ1NTcxMjV9.pWFYvaG-d4DD2wajJ3fdoBojHm8qsf121rHa719wFu0'
      }}, function (error, response, body) {
            console.log('Status:', response.statusCode);
            console.log('Headers:', JSON.stringify(response.headers));
            console.log('Response:', body);
          }
    ).then(products=> {
      dispatch(addProducts(products.data))
    })
  };
};

export function acquireProduct(id) {
  return(dispatch)=> {
    return axios({
      method: 'POST',
      url: 'https://aerolab-challenge.now.sh/redeem',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1YTQ2NGVjNWQ4MGVjYzAwNTg0NTM4ZmMiLCJpYXQiOjE1MTQ1NTcxMjV9.pWFYvaG-d4DD2wajJ3fdoBojHm8qsf121rHa719wFu0'
      },
      data: {productId: id}
    }, function (error, response, body) {
      console.log('Status:', response.statusCode);
      console.log('Headers:', JSON.stringify(response.headers));
      console.log('Response:', body);
    }
  ).then((message)=> {
      console.log('canjearProductos me da una mensaje que fue realizado con exito...', message)
    })
  };
};
