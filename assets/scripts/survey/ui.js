const showSurveysTemplate = require('../templates/survey-listing.handlebars')
const showSurveyTemplate = require('../templates/survey-show.handlebars')

const createSurveySuccess = function () {
  $('#message').text('Survey created!')
  $('#message').css('background-color', '#d5fdd5')
  $('form').trigger('reset')
}

const createSurveyFailure = function (data) {
  $('#message').text('Failed to create survey')
  $('#message').css('background-color', '#ff6666')
  $('form').trigger('reset')
}

const indexSurveySuccess = function (data) {
  const getSurveyHtml = showSurveysTemplate({
    surveys: data.surveys
  })
  $('.handlebars').empty() // Prevents the list from duplicating if user clicks "View All Animals" multiple time
  $('.content').append(getSurveyHtml)
  $('#message').text('Index works!')
  $('#message').css('background-color', '#d5fdd5')
  $('.content').removeClass('hidden')
  $('form').trigger('reset')
}
const indexSurveyFailure = function (data) {
  $('#message').text('Index dedd')
  $('#message').css('background-color', '#ff6666')
  $('form').trigger('reset')
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
  $('form').trigger('reset')
}
const showSurveyFailure = function (data) {
  $('#message').text('Show dedd')
  $('#message').css('background-color', '#ff6666')
  $('form').trigger('reset')
}
const deleteSurveySuccess = function () {
  $('#message').text('Delete works!')
  $('#message').css('background-color', '#d5fdd5')
  $('form').trigger('reset')
}
const deleteSurveyFailure = function (data) {
  $('#message').text('Delete dedd')
  $('#message').css('background-color', '#ff6666')
  $('form').trigger('reset')
}
const updateSurveySuccess = function () {
  $('#message').text('Update works!')
  $('#message').css('background-color', '#d5fdd5')
  $('form').trigger('reset')
}
const updateSurveyFailure = function (data) {
  $('#message').text('Update dedd')
  $('#message').css('background-color', '#ff6666')
  $('form').trigger('reset')
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
