const getFormFields = require('../../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')
// const store = require('../store')

const onCreateSurvey = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.createSurvey(data)
    .then(ui.createSurveySuccess)
    .catch(ui.createSurveyFailure)
  // console.log('working')
}

const onIndexSurvey = function () {
  event.preventDefault()
  api.indexSurvey()
    .then(ui.indexSurveySuccess)
    .catch(ui.indexSurveyFailure)
}

const onShowSurvey = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.showSurvey(data.survey.id)
    .then(ui.showSurveySuccess)
    .catch(ui.showSurveyFailure)
}
const onDeleteSurvey = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.deleteSurvey(data.survey.id)
    .then(ui.deleteSurveySuccess)
    .catch(ui.deleteSurveyFailure)
}
const onUpdateSurvey = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.updateSurvey(data)
    .then(ui.updateSurveySuccess)
    .catch(ui.updateSurveyFailure)
  // console.log('working')
}
const addHandlers = function () {
  $('#create-survey').on('submit', onCreateSurvey)
  $('#index-survey').on('submit', onIndexSurvey)
  $('#show-survey').on('submit', onShowSurvey)
  $('#delete-survey').on('submit', onDeleteSurvey)
  $('#update-survey').on('submit', onUpdateSurvey)
}

module.exports = {
  addHandlers
}