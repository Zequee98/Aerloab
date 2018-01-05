import axios from 'axios';

function addUser(user) {
  return {
    type: 'REQ_USER',
    user,
  };
};

export function getUser() {
  return(dispatch)=> {
    return axios({
      method: 'GET',
      url: 'https://aerolab-challenge.now.sh/user/me',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1YTQ2NGVjNWQ4MGVjYzAwNTg0NTM4ZmMiLCJpYXQiOjE1MTQ1NTcxMjV9.pWFYvaG-d4DD2wajJ3fdoBojHm8qsf121rHa719wFu0'
      }}, function (error, response, body) {
            console.log('Status:', response.statusCode);
            console.log('Headers:', JSON.stringify(response.headers));
            console.log('Response:', body);
          }
    ).then(user=> {
      dispatch(addUser(user.data))
    });
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

// function subtractUserPoints(price){
//   return {
//     type: 'SUBTRACT_POINTS',
//     price,
//   };
// };
//
// function addUserHistory(product) {
//   return {
//     type: 'ADD_HISTORY',
//     product
//   }
// }
//
// function acquireProduct(productPrice, product) {
//   return(dispatch)=> {
//     dispatch(subtractUserPoints(productPrice))
//     dispatch(addUserHistory(product))
//   };
// };
