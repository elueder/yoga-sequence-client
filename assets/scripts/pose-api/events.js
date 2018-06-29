'use strict'

const getFormFields = require('../../../lib/get-form-fields')
const poseApi = require('./api')
const poseUi = require('./ui')

const onCreatePose = function (event) {
  event.preventDefault()
  console.log('event.target is ', event.target)
  const data = getFormFields(event.target)
  console.log('data is ', data)
  poseApi.createPose(data)
    .then(poseUi.createPoseSuccess)
    .catch(poseUi.createPoseError)
}

const onGetPoses = function (event) {
  event.preventDefault()
  console.log('got poses')
  poseApi.getPoses()
    .then(poseUi.getPosesSuccess)
    .catch(poseUi.getPosesError)
}

const enableEdits = function (event) {
  event.preventDefault()
  $('.editable, .save-button').removeClass('hidden')
  $('.uneditable, .update-pose').addClass('hidden')
}

const onUpdatePose = function (event) {
  event.preventDefault()
  // console.log('element is ', event.target.getAttribute('data-id'))
  const poseId = event.target.getAttribute('data-id')
  // console.log('poseId is ', poseId)
  const data = getFormFields(event.target)
  const targetedHidden = event.target.childElement
  console.log('targetedHidden is ', targetedHidden)
  // debugger
  console.log('data is ', data)
  poseApi.updatePose(data, poseId)
    .then(poseUi.updatePoseSuccess)
    .catch(poseUi.updatePoseError)
}

const addHandlers = () => {
  $('#create-pose-form').on('submit', onCreatePose)
  $('#get-poses').on('click', onGetPoses)
  $('.content').on('click', '.update-pose', enableEdits)
  $('.content').on('submit', '.save-pose', onUpdatePose)
}

module.exports = {
  addHandlers
}
