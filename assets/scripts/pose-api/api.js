'use strict'

const store = require('../store')
const config = require('../config')

const createPose = function (data) {
  console.log('store.token is ', store.token)
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/poses',
    data: data,
    headers: {
      Authorization: 'Token token=' + store.token
    }
  })
}

const getPoses = function () {
  return $.ajax({
    method: 'GET',
    url: config.apiUrl + '/poses',
    headers: {
      Authorization: 'Token token=' + store.token
    }
  })
}

module.exports = {
  createPose,
  getPoses
}
