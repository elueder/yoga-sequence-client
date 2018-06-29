'use strict'

const store = require('../store')
const showPosesTemplate = require('../templates/pose-listing.handlebars')

const createPoseSuccess = function () {
  console.log('pose created!')
}

const createPoseError = function () {
  console.log('pose couldnt be created :(')
}

const getPosesSuccess = function (data) {
  console.log('got poses')
  console.log('data is ', data)
  console.log('data.poses is ', data.poses)
  const showPosesHtml = showPosesTemplate({ poses: data.poses })
  $('.content').html(showPosesHtml)
}

const getPosesError = function () {
  console.log('couldnt get poses :(')
}

module.exports = {
  createPoseSuccess,
  createPoseError,
  getPosesSuccess,
  getPosesError
}
