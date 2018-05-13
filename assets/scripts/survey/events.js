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
  if (confirm('Are you sure you want to delete this survey')) {
    api.deleteSurvey(data.survey.id)
      .then(ui.deleteSurveySuccess)
      .catch(ui.deleteSurveyFailure)
  }
}
const onUpdateSurvey = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.updateSurvey(data)
    .then(ui.updateSurveySuccess)
    .catch(ui.updateSurveyFailure)
  // console.log('working')
}
const hideContent = function () {
  event.preventDefault()
  $('.content').addClass('hidden')
}

const onUserSurveys = function () {
  event.preventDefault()
  api.indexSurvey()
    .then(ui.userSurveysSuccess)
    .catch(ui)
}

const addHandlers = function () {
  $('#create-survey').on('submit', onCreateSurvey)
  $('#index-survey').on('submit', onIndexSurvey)
  $('#show-survey').on('submit', onShowSurvey)
  // $('#delete-survey').on('submit', onDeleteSurvey)
  $('.content').on('submit', '.delete-survey', onDeleteSurvey)
  $('#update-survey').on('submit', onUpdateSurvey)
  $('#clear-list').on('click', hideContent)
  $('#user-surveys').on('submit', onUserSurveys)
}

module.exports = {
  addHandlers
}
