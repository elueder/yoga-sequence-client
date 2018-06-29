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

const updatePose = function (data, poseId) {
  console.log('poseId is ', poseId)
  console.log('data is ', data)
  return $.ajax({
    method: 'PATCH',
    url: config.apiUrl + '/poses/' + poseId,
    data: data,
    headers: {
      Authorization: 'Token token=' + store.token
    }
  })
}

module.exports = {
  createPose,
  getPoses,
  updatePose
}
