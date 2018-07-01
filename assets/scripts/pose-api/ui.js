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

const enableEdits = function (event) {
  event.preventDefault()
  $(this).parent('.save-pose').children('.editable').removeClass('hidden')
  $(this).parent('.save-pose').children('.list-edit').children('.editable').removeClass('hidden')
  $(this).parent('.save-pose').children('.save-button').removeClass('hidden')
  $(this).parent('.save-pose').children('.list-edit').children('.uneditable').addClass('hidden')
  $(this).parent('.save-pose').children('.update-pose').addClass('hidden')
}

const updatePoseSuccess = function (poseId) {
  console.log('updated!')
  $('.editable, .save-pose').addClass('hidden')
  $('.uneditable, .update-pose').removeClass('hidden')
}

const updatePoseError = function () {
  console.log('could not update :(')
}

module.exports = {
  createPoseSuccess,
  createPoseError,
  getPosesSuccess,
  getPosesError,
  enableEdits,
  updatePoseSuccess,
  updatePoseError
}
