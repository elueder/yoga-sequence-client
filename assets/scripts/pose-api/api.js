'use strict'

const store = require('../store')
const config = require('../config')

const createPose = function (data) {
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
  return $.ajax({
    method: 'PATCH',
    url: config.apiUrl + '/poses/' + poseId,
    data: data,
    headers: {
      Authorization: 'Token token=' + store.token
    }
  })
}

const deletePose = function (poseId) {
  return $.ajax({
    method: 'DELETE',
    url: config.apiUrl + '/poses/' + poseId,
    headers: {
      Authorization: 'Token token=' + store.token
    }
  })
}

module.exports = {
  createPose,
  getPoses,
  updatePose,
  deletePose
}
