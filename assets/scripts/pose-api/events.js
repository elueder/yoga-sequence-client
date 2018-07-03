'use strict'

const getFormFields = require('../../../lib/get-form-fields')
const poseApi = require('./api')
const poseUi = require('./ui')

const onCreatePose = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  // debugger
  if (data.pose.pose_name === '' && data.pose.muscle_action === '' && data.pose.cues === '') {
    $('#user-messages').html('')
    $('#user-messages').html(`<div class="alert alert-warning">
      <button type="button" class="close" aria-hidden="true" data-dismiss="alert">&times;</button>
      Please fill out form.
      </div>`)
    // return
  } else if (data.pose.pose_name === '') {
    $('#user-messages').html('')
    $('#user-messages').html(`<div class="alert alert-warning">
      <button type="button" class="close" aria-hidden="true" data-dismiss="alert">&times;</button>
      Please give pose a name.
      </div>`)
    // return
  } else {
    poseApi.createPose(data)
      .then(poseApi.getPoses)
      .then(poseUi.getPosesSuccess)
      .then(poseUi.createPoseSuccess)
      .catch(poseUi.createPoseError)
  }
}

const onGetPoses = function (event) {
  event.preventDefault()
  // console.log('got poses')
  poseApi.getPoses()
    .then(poseUi.getPosesSuccess)
    .catch(poseUi.getPosesError)
}

const enableEdits = function (event) {
  event.preventDefault()
  $(this).parent('.save-pose').children('.editable').removeClass('hidden')
  $(this).parent('.save-pose').children('.list-edit').children('.uneditable').children('.editable').removeClass('hidden')
  $(this).parent('.save-pose').children('.save-button').removeClass('hidden')
  $(this).parent('.save-pose').children('.list-edit').children('.uneditable').children('.current-val').addClass('hidden')
  $(this).parent('.save-pose').children('.update-pose').addClass('hidden')
}

const onUpdatePose = function (event) {
  event.preventDefault()
  const poseId = event.target.getAttribute('data-id')
  const data = getFormFields(event.target)
  if (data.pose.pose_name === '' && data.pose.muscle_action === '' && data.pose.cues === '') {
    $('#user-messages').html('')
    $('#user-messages').html(`<div class="alert alert-warning">
      <button type="button" class="close" aria-hidden="true" data-dismiss="alert">&times;</button>
      Please fill out form.
      </div>`)
  } else if (data.pose.pose_name === '') {
    $('#user-messages').html('')
    $('#user-messages').html(`<div class="alert alert-warning">
      <button type="button" class="close" aria-hidden="true" data-dismiss="alert">&times;</button>
      Please give pose a name.
      </div>`)
  } else {
    poseApi.updatePose(data, poseId)
      .then(poseApi.getPoses)
      .then(poseUi.getPosesSuccess)
      .then(poseUi.updatePoseSuccess)
      .catch(poseUi.updatePoseError)
  }
}

const onDeletePose = function (event) {
  event.preventDefault()
  console.log('you deleted it')
  const poseId = event.target.getAttribute('data-id')
  poseApi.deletePose(poseId)
    .then(poseApi.getPoses)
    .then(poseUi.getPosesSuccess)
    .then(poseUi.deletePoseSuccess)
    .catch(poseUi.deletePoseError)
}

const addHandlers = () => {
  $('#create-pose-form').on('submit', onCreatePose)
  $('#get-poses').on('click', onGetPoses)
  $('.content').on('click', '.update-pose', enableEdits)
  $('.content').on('submit', '.save-pose', onUpdatePose)
  $('.content').on('click', '.delete-pose', onDeletePose)
}

module.exports = {
  addHandlers
}
