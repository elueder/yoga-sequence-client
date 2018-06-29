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

const addHandlers = () => {
  $('#create-pose-form').on('submit', onCreatePose)
  $('#get-poses').on('click', onGetPoses)
}

module.exports = {
  addHandlers
}
