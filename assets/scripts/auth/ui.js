'use strict'

const store = require('../store')

const signUpSuccess = function (signUpResponse) {
  store.token = signUpResponse.user.token
  // console.log('signed up!')
  // console.log('signUpResponse is ', signUpResponse)
  // console.log('signUpResponse.user.token is ', signUpResponse.user.token)
}

const signUpError = function () {
  // console.log('couldnt sign up')
}

const signInSuccess = function (signInResponse) {
  store.token = signInResponse.user.token
  // console.log('signed in!')
  // console.log('signInResponse is ', signInResponse)
  // console.log('signInResponse.user.token is ', signInResponse.user.token)
}

const signInError = function () {
  // console.log('couldnt sign in')
}

const signOutSuccess = function (signOutResponse) {
  // console.log('signed out!')
}

const signOutError = function (signOutResponse) {
  // console.log('couldnt sign out')
}

const changePasswordSuccess = function () {
  // console.log('changed pwd!')
}

const changePasswordError = function () {
  // console.log('couldnt change pwd')
}

module.exports = {
  signUpSuccess,
  signUpError,
  signInSuccess,
  signInError,
  signOutSuccess,
  signOutError,
  changePasswordSuccess,
  changePasswordError
}
