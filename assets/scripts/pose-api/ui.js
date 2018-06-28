'use strict'

const store = require('../store')

const createPoseSuccess = function () {
  console.log('pose created!')
}

const createPoseError = function () {
  console.log('pose couldnt be created :(')
}

module.exports = {
  createPoseSuccess,
  createPoseError
}
