'use strict'

const store = require('../store')
const showPosesTemplate = require('../templates/pose-listing.handlebars')

const createPoseSuccess = function () {
  $('#user-messages').html('')
  // $('.content').html('')
  $('#user-messages').html(`
    <div class="alert alert-success alert-dismissable">
    <button type="button" class="close" aria-hidden="true" data-dismiss="alert">&times;</button>
    Pose created!
    </div>
    `)
  document.getElementById('sign-up-form').reset()
  document.getElementById('sign-in-form').reset()
  document.getElementById('change-password-form').reset()
  document.getElementById('create-pose-form').reset()
}

const createPoseError = function () {
  $('#user-messages').html('')
  $('.content').html('')
  $('#user-messages').html(`div class="alert alert-warning">
    <button type="button" class="close" aria-hidden="true" data-dismiss="alert">&times;</button>
    Error creating pose.
    </div>`)
  document.getElementById('sign-up-form').reset()
  document.getElementById('sign-in-form').reset()
  document.getElementById('change-password-form').reset()
  document.getElementById('create-pose-form').reset()
}

const getPosesSuccess = function (data) {
  $('#user-messages').html('')
  $('.content').html('')
  // debugger
  const showPosesHtml = showPosesTemplate({ poses: data.poses })
  if (data.poses.length === 0) {
    $('#user-messages').html(`
      <div class="alert alert-success alert-dismissable">
      <button type="button" class="close" aria-hidden="true" data-dismiss="alert">&times;</button>
      You haven't created any poses!
      </div>
      `)
  } else {
    $('.content').html(showPosesHtml)
  }
  document.getElementById('sign-up-form').reset()
  document.getElementById('sign-in-form').reset()
  document.getElementById('change-password-form').reset()
  document.getElementById('create-pose-form').reset()
}

const getPosesError = function () {
  $('#user-messages').html('')
  $('.content').html('')
  $('#user-messages').html(`div class="alert alert-warning">
    <button type="button" class="close" aria-hidden="true" data-dismiss="alert">&times;</button>
    Error loading poses.
    </div>`)
  document.getElementById('sign-up-form').reset()
  document.getElementById('sign-in-form').reset()
  document.getElementById('change-password-form').reset()
  document.getElementById('create-pose-form').reset()
}

const updatePoseSuccess = function (data, poseId) {
  $('#user-messages').html('')
  $('.content').html('')
  $('#user-messages').html(`
    <div class="alert alert-success alert-dismissable">
    <button type="button" class="close" aria-hidden="true" data-dismiss="alert">&times;</button>
    Pose updated!</div>
    `)
  $('.editable, .save-pose').addClass('hidden')
  $('.uneditable, .update-pose').removeClass('hidden')
  // debugger
  // const showPoseHtml = showPosesTemplate({ poses: data.pose })
  // $('.content').html(showPoseHtml)
  document.getElementById('sign-up-form').reset()
  document.getElementById('sign-in-form').reset()
  document.getElementById('change-password-form').reset()
  document.getElementById('create-pose-form').reset()
}

const updatePoseError = function () {
  $('#user-messages').html('')
  $('.content').html('')
  $('#user-messages').html(`div class="alert alert-warning">
    <button type="button" class="close" aria-hidden="true" data-dismiss="alert">&times;</button>
    Error updating pose.
    </div>`)
  document.getElementById('sign-up-form').reset()
  document.getElementById('sign-in-form').reset()
  document.getElementById('change-password-form').reset()
  document.getElementById('create-pose-form').reset()
}

const deletePoseSuccess = function () {
  $('#user-messages').html('')
  $('.content').html('')
  $('#user-messages').html(`
    <div class="alert alert-success alert-dismissable">
    <button type="button" class="close" aria-hidden="true" data-dismiss="alert">&times;</button>
    Pose deleted!</div>
    `)
  document.getElementById('sign-up-form').reset()
  document.getElementById('sign-in-form').reset()
  document.getElementById('change-password-form').reset()
  document.getElementById('create-pose-form').reset()
}

const deletePoseError = function () {
  $('#user-messages').html('')
  $('.content').html('')
  $('#user-messages').html(`div class="alert alert-warning">
    <button type="button" class="close" aria-hidden="true" data-dismiss="alert">&times;</button>
    Error deleting pose.
    </div>`)
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
