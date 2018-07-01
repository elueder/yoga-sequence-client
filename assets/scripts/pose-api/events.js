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

const onUpdatePose = function (event) {
  event.preventDefault()
  poseUi.enableEdits(event)
  const poseId = event.target.getAttribute('data-id')
  const data = getFormFields(event.target)
  console.log('data is ', data)
  poseApi.updatePose(data, poseId)
    .then(poseUi.updatePoseSuccess)
    .catch(poseUi.updatePoseError)
}

const addHandlers = () => {
  $('#create-pose-form').on('submit', onCreatePose)
  $('#get-poses').on('click', onGetPoses)
  $('.content').on('click', '.update-pose', poseUi.enableEdits)
  $('.content').on('submit', '.save-pose', onUpdatePose)
}

module.exports = {
  addHandlers
}
