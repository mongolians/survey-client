const showSurveysTemplate = require('../templates/survey-listing.handlebars')
const showSurveyTemplate = require('../templates/survey-show.handlebars')

const createSurveySuccess = function () {
  $('#message').text('Survey created!')
  $('#message').css('background-color', '#d5fdd5')
  setTimeout(() => $('#message').html(''), 2000)
  $('form').trigger('reset')
}

const createSurveyFailure = function (data) {
  $('#message').text('Failed to create survey')
  $('#message').css('background-color', '#ff6666')
  setTimeout(() => $('#message').html(''), 2000)
  $('form').trigger('reset')
}

const indexSurveySuccess = function (data) {
  const getSurveyHtml = showSurveysTemplate({
    surveys: data.surveys
  })
  $('.handlebars').empty() // Prevents the list from duplicating if user clicks "View All Animals" multiple time
  $('.content').append(getSurveyHtml)
  // $('#message').text('Index works!')
  // $('#message').css('background-color', '#d5fdd5')
  $('.content').removeClass('hidden')
  $('form').trigger('reset')
  console.log(data)
}
const indexSurveyFailure = function (data) {
  $('#message').text('Failed to get surveys')
  $('#message').css('background-color', '#ff6666')
  setTimeout(() => $('#message').html(''), 2000)
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
  // $('#message').text('Show works!')
  // $('#message').css('background-color', '#d5fdd5')
  // setTimeout(() => $('#message').html(''), 2000)
  $('form').trigger('reset')
}
const showSurveyFailure = function (data) {
  $('#message').text('Failed to get survey')
  $('#message').css('background-color', '#ff6666')
  setTimeout(() => $('#message').html(''), 2000)
  $('form').trigger('reset')
}
const deleteSurveySuccess = function () {
  $('#message').text('Survey Deleted')
  $('#message').css('background-color', '#d5fdd5')
  setTimeout(() => $('#message').html(''), 2000)
  $('form').trigger('reset')
}
const deleteSurveyFailure = function (data) {
  $('#message').text('Failed to delete survey')
  $('#message').css('background-color', '#ff6666')
  setTimeout(() => $('#message').html(''), 2000)
  $('form').trigger('reset')
}
const updateSurveySuccess = function () {
  $('#message').text('Survey Updated')
  $('#message').css('background-color', '#d5fdd5')
  setTimeout(() => $('#message').html(''), 2000)
  $('form').trigger('reset')
}
const updateSurveyFailure = function (data) {
  $('#message').text('Failed to update survey')
  $('#message').css('background-color', '#ff6666')
  setTimeout(() => $('#message').html(''), 2000)
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
