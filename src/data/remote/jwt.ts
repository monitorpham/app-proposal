import React, { useState, useCallback } from 'react';
import axios from 'axios';

export default function setAuthorizationToken(token:string) {
  console.log("######", token)
  if (token!=null) {
    console.log(token)
    // axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    // fetch('https://deploy-proposal.herokuapp.com/api', {
    //   method: 'POST',
    //   headers: {
    //     // Accept: 'application/json',
    //     // 'Content-Type': 'application/json',
    //     Authorization: `Bearer ${token}`
    //   }
    // });

    
    const url = 'https://deploy-proposal.herokuapp.com/api'; 
    axios.post(url, {},{
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
  } else {
    // delete axios.defaults.headers.common['Authorization'];
  }
}


// axios.interceptors.request.use(req => {
//   // `req` is the Axios request config, so you can modify
//   // the `headers`.
//   req.headers.authorization = 'my secret token';
//   return req;
// });

// // Automatically sets the authorization header because
// // of the request interceptor
// const res = await axios.get('https://httpbin.org/get');