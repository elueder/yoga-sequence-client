'use strict'

const store = require('../store')

const signUpSuccess = function (signUpResponse) {
  store.token = signUpResponse.user.token
  // console.log('signed up!')
  // console.log('signUpResponse is ', signUpResponse)
  // console.log('signUpResponse.user.token is ', signUpResponse.user.token)
  document.getElementById('sign-up-form').reset()
  document.getElementById('sign-in-form').reset()
  document.getElementById('change-password-form').reset()
  document.getElementById('create-pose-form').reset()
}

const signUpError = function () {
  // console.log('couldnt sign up')
  document.getElementById('sign-up-form').reset()
  document.getElementById('sign-in-form').reset()
  document.getElementById('change-password-form').reset()
  document.getElementById('create-pose-form').reset()
}

const signInSuccess = function (signInResponse) {
  store.token = signInResponse.user.token
  // console.log('signed in!')
  // console.log('signInResponse is ', signInResponse)
  // console.log('signInResponse.user.token is ', signInResponse.user.token)
  document.getElementById('sign-up-form').reset()
  document.getElementById('sign-in-form').reset()
  document.getElementById('change-password-form').reset()
  document.getElementById('create-pose-form').reset()
}

const signInError = function () {
  // console.log('couldnt sign in')
  document.getElementById('sign-up-form').reset()
  document.getElementById('sign-in-form').reset()
  document.getElementById('change-password-form').reset()
  document.getElementById('create-pose-form').reset()
}

const signOutSuccess = function (signOutResponse) {
  // console.log('signed out!')
  document.getElementById('sign-up-form').reset()
  document.getElementById('sign-in-form').reset()
  document.getElementById('change-password-form').reset()
  document.getElementById('create-pose-form').reset()
}

const signOutError = function (signOutResponse) {
  // console.log('couldnt sign out')
  document.getElementById('sign-up-form').reset()
  document.getElementById('sign-in-form').reset()
  document.getElementById('change-password-form').reset()
  document.getElementById('create-pose-form').reset()
}

const changePasswordSuccess = function () {
  // console.log('changed pwd!')
  document.getElementById('sign-up-form').reset()
  document.getElementById('sign-in-form').reset()
  document.getElementById('change-password-form').reset()
  document.getElementById('create-pose-form').reset()
}

const changePasswordError = function () {
  // console.log('couldnt change pwd')
  document.getElementById('sign-up-form').reset()
  document.getElementById('sign-in-form').reset()
  document.getElementById('change-password-form').reset()
  document.getElementById('create-pose-form').reset()
}

const signedInState = function () {
  $('#change-password-form, #sign-out, #get-poses, #create-pose-form').removeClass('hidden')
  $('#sign-up-form, #sign-in-form').addClass('hidden')
}

const signedOutState = function () {
  $('#sign-up-form, #sign-in-form').removeClass('hidden')
  $('#change-password-form, #sign-out, #get-poses, #create-pose-form').addClass('hidden')
}

module.exports = {
  signUpSuccess,
  signUpError,
  signInSuccess,
  signInError,
  signOutSuccess,
  signOutError,
  changePasswordSuccess,
  changePasswordError,
  signedInState,
  signedOutState
}
