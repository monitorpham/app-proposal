import React, { useState, useCallback } from 'react';
import axios from 'axios';

export function setAuthorizationToken(token: string) {
  console.log("######", token)
  if (token != null) {
    // console.log(token)
    // axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    // fetch('https://deploy-proposal.herokuapp.com/api', {
    //   method: 'POST',
    //   headers: {
    //     // Accept: 'application/json',
    //     // 'Content-Type': 'application/json',
    //     Authorization: `Bearer ${token}`
    //   }
    // });


    axios.interceptors.request.use(req => {
      // `req` is the Axios request config, so you can modify
      // the `headers`.
      req.headers.authorization = `Bearer ${token}`;
      return req;
    });




    // const url = 'https://deploy-proposal.herokuapp.com/api/authenticate'; 
    // try{axios.post(url,{
    //   headers: {
    //     'Authorization': `Bearer ${token}`
    //   }
    // })}
    // catch(error){
    //   console.error();

    // }
  } else {
    // delete axios.defaults.headers.common['Authorization'];
  }
}
export default axios;

// axios.interceptors.request.use(req => {
//   // `req` is the Axios request config, so you can modify
//   // the `headers`.
//   req.headers.authorization = 'my secret token';
//   return req;
// });

// // Automatically sets the authorization header because
// // of the request interceptor
// const res = await axios.get('https://httpbin.org/get');


// const apiUrl = 'https://deploy-proposal.herokuapp.com/api';
// export default function setAuthorizationToken(token: string) {
//   axios.interceptors.request.use(
//     config => {
//       const { origin } = new URL(config.url);
//       const allowedOrigins = [apiUrl];
//       // const token = localStorage.getItem('token');
//       if (allowedOrigins.includes(origin)&&token) {
//         config.headers.authorization = `Bearer ${token}`;
//       }
//       return config;
//     },
//     error => {
//       return Promise.reject(error);
//     }
//   );
// }