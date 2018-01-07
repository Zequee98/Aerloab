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

export function getHistoryUser() {
  return(dispatch)=> {
    return axios({
      method: 'GET',
      url: 'https://aerolab-challenge.now.sh/user/history',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1YTQ2NGVjNWQ4MGVjYzAwNTg0NTM4ZmMiLCJpYXQiOjE1MTQ1NTcxMjV9.pWFYvaG-d4DD2wajJ3fdoBojHm8qsf121rHa719wFu0'
      }}, function (error, response, body) {
            console.log('Status:', response.statusCode);
            console.log('Headers:', JSON.stringify(response.headers));
            console.log('Response:', body);
          }
    ).then(productosAdquiridos => {
      console.log('getHistoryUser me devuelve un arreglo de objeto con los productos que compre:', productosAdquiridos)
    });
  };
};
