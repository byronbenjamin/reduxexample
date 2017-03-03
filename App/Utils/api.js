var STORAGE_KEY = 'id_token';
import React, { Component } from 'react';
import {
  AsyncStorage
} from 'react-native';
var api = {

  async storeToken(item, selectedValue) {
    try {
      await AsyncStorage.setItem(item, selectedValue);
    } catch (error) {
      console.log('AsyncStorage error: ' + error.message);
    }
  },
  userLogin(email, password){

    var url = `http://localhost:3000/api/v1/artist_token`;
    return fetch(url, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        auth: {
          email: email,
          password: password
        }
      })
    })
    .then((res) => res.json())


  },
  userRegistration(email, password, username){
    var email = email;
    var password = password;
    var url = `http://localhost:3000/users`;
    return fetch(url, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: email,
        password: password,
        username: username
      })
    })
    .then((res) => res.json());
  }
};

module.exports = api;

// async userRegistration(email,password,username){
//
//   var url = `http://localhost:3000/users`;
//   return fetch(url, {
//     method: 'POST',
//     headers: {
//       'Accept': 'application/json',
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify({
//       username: username,
//       email: email,
//       password: password
//     })
//   }
// },
