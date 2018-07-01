'use strict'

const store = require('../store')
const showPosesTemplate = require('../templates/pose-listing.handlebars')

const createPoseSuccess = function () {
  // console.log('pose created!')
}

const createPoseError = function () {
  // console.log('pose couldnt be created :(')
}

const getPosesSuccess = function (data) {
  // console.log('got poses')
  // console.log('data is ', data)
  // console.log('data.poses is ', data.poses)
  const showPosesHtml = showPosesTemplate({ poses: data.poses })
  $('.content').html(showPosesHtml)
}

const getPosesError = function () {
  // console.log('couldnt get poses :(')
}

const updatePoseSuccess = function (data, poseId) {
  // console.log('updated!')
  $('.editable, .save-pose').addClass('hidden')
  $('.uneditable, .update-pose').removeClass('hidden')
  // const showPosesHtml = showPosesTemplate({ poses: data.poses })
  // $('.content').html(showPosesHtml)
}

const updatePoseError = function () {
  console.log('could not update :(')
}

const deletePoseSuccess = function () {
  console.log('yippee deleted')
}

const deletePoseError = function () {
  console.log('couldnt delete :(')
}

module.exports = {
  createPoseSuccess,
  createPoseError,
  getPosesSuccess,
  getPosesError,
  // enableEdits,
  updatePoseSuccess,
  updatePoseError,
  deletePoseSuccess,
  deletePoseError
}
