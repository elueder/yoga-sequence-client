'use strict'

const store = require('../store')
const showPosesTemplate = require('../templates/pose-listing.handlebars')

const createPoseSuccess = function () {
  // console.log('pose created!')
  document.getElementById('sign-up-form').reset()
  document.getElementById('sign-in-form').reset()
  document.getElementById('change-password-form').reset()
  document.getElementById('create-pose-form').reset()
}

const createPoseError = function () {
  // console.log('pose couldnt be created :(')
  document.getElementById('sign-up-form').reset()
  document.getElementById('sign-in-form').reset()
  document.getElementById('change-password-form').reset()
  document.getElementById('create-pose-form').reset()
}

const getPosesSuccess = function (data) {
  // console.log('got poses')
  // console.log('data is ', data)
  // console.log('data.poses is ', data.poses)
  const showPosesHtml = showPosesTemplate({ poses: data.poses })
  $('.content').html(showPosesHtml)
  document.getElementById('sign-up-form').reset()
  document.getElementById('sign-in-form').reset()
  document.getElementById('change-password-form').reset()
  document.getElementById('create-pose-form').reset()
}

const getPosesError = function () {
  // console.log('couldnt get poses :(')
  document.getElementById('sign-up-form').reset()
  document.getElementById('sign-in-form').reset()
  document.getElementById('change-password-form').reset()
  document.getElementById('create-pose-form').reset()
}

const updatePoseSuccess = function (data, poseId) {
  // console.log('updated!')
  $('.editable, .save-pose').addClass('hidden')
  $('.uneditable, .update-pose').removeClass('hidden')
  // debugger
  const showPoseHtml = showPosesTemplate({ poses: data.pose })
  $('.content').html(showPoseHtml)
  document.getElementById('sign-up-form').reset()
  document.getElementById('sign-in-form').reset()
  document.getElementById('change-password-form').reset()
  document.getElementById('create-pose-form').reset()
}

const updatePoseError = function () {
  console.log('could not update :(')
  document.getElementById('sign-up-form').reset()
  document.getElementById('sign-in-form').reset()
  document.getElementById('change-password-form').reset()
  document.getElementById('create-pose-form').reset()
}

const deletePoseSuccess = function () {
  console.log('yippee deleted')
  document.getElementById('sign-up-form').reset()
  document.getElementById('sign-in-form').reset()
  document.getElementById('change-password-form').reset()
  document.getElementById('create-pose-form').reset()
}

const deletePoseError = function () {
  console.log('couldnt delete :(')
  document.getElementById('sign-up-form').reset()
  document.getElementById('sign-in-form').reset()
  document.getElementById('change-password-form').reset()
  document.getElementById('create-pose-form').reset()
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
