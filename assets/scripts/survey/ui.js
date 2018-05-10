const showSurveysTemplate = require('../templates/survey-listing.handlebars')
const showSurveyTemplate = require('../templates/survey-show.handlebars')

const createSurveySuccess = function () {
  $('#message').text('Survey created!')
  $('#message').css('background-color', '#d5fdd5')
}

const createSurveyFailure = function (data) {
  $('#message').text('Failed to create survey')
  $('#message').css('background-color', '#ff6666')
}

const indexSurveySuccess = function (data) {
  const getSurveyHtml = showSurveysTemplate({
    surveys: data.surveys
  })
  $('.handlebars').empty() // Prevents the list from duplicating if user clicks "View All Animals" multiple time
  $('.content').append(getSurveyHtml)
  $('#clear-list').removeClass('hidden') // Show clear button when user clicks "View All Animals"
  $('#message').text('Index works!')
  $('#message').css('background-color', '#d5fdd5')
}
const indexSurveyFailure = function (data) {
  $('#message').text('Index dedd')
  $('#message').css('background-color', '#ff6666')
}
const showSurveySuccess = function (data) {
  console.log(data.survey)
  const getSurveyHtml = showSurveyTemplate({
    survey: data.survey
  })
  $('.handlebars').empty() // Prevents the list from duplicating if user clicks "View All Animals" multiple time
  $('.content').append(getSurveyHtml)
  $('#clear-list').removeClass('hidden') // Show clear button when user clicks "View All Animals"
  $('#message').text('Show works!')
  $('#message').css('background-color', '#d5fdd5')
}
const showSurveyFailure = function (data) {
  $('#message').text('Show dedd')
  $('#message').css('background-color', '#ff6666')
}
const deleteSurveySuccess = function () {
  $('#message').text('Delete works!')
  $('#message').css('background-color', '#d5fdd5')
}
const deleteSurveyFailure = function (data) {
  $('#message').text('Delete dedd')
  $('#message').css('background-color', '#ff6666')
}
const updateSurveySuccess = function () {
  $('#message').text('Update works!')
  $('#message').css('background-color', '#d5fdd5')
}
const updateSurveyFailure = function (data) {
  $('#message').text('Update dedd')
  $('#message').css('background-color', '#ff6666')
}
module.exports = {
  createSurveySuccess,
  createSurveyFailure,
  indexSurveyFailure,
  indexSurveySuccess,
  showSurveySuccess,
  showSurveyFailure,
  deleteSurveySuccess,
  deleteSurveyFailure,
  updateSurveyFailure,
  updateSurveySuccess
}
