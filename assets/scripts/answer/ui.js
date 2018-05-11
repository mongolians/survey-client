// const global = require('../global')
const store = require('../store')

const createAnswerSuccess = function (data) {
  console.log(data)
  console.log(data.answer.survey)
  console.log(store.surveyId)
  // const surveyId = $('.submit-answer-button').data('id')
  // console.log(surveyId)
  // console.log($('#' + data.answer.survey + '.modal-message'))
  $('#' + data.answer.survey + ' .modal-message').text('Answer created!')
  $('#' + data.answer.survey + ' .modal-message').css('background-color', '#d5fdd5')
  $('.view-results').removeClass('hidden')
  $('form').trigger('reset')
}

const createAnswerFailure = function (data, event) {
  // console.log(data)
  // const surveyId = $('.submit-answer-button').data('id')
  // console.log(surveyId)
  // console.log(event.target.id)
  // $('#' + event.target.id + ' .modal-message').text('Failed to post answer')
  // $('#' + event.target.id + ' .modal-message').css('background-color', '#ff6666')
  $('form').trigger('reset')
  // $("input[type='radio']").trigger('reset')
}
const showAnswerSuccess = function (data) {
  console.log(data.answer)
  // const getAnswerHtml = showAnswerTemplate({
  //   answer: data.answer
  // })
  // $('.handlebars').empty() // Prevents the list from duplicating if user clicks "View All Animals" multiple time
  // $('.content').append(getAnswerHtml)
  // $('#clear-list').removeClass('hidden') // Show clear button when user clicks "View All Animals"
  $('#message').text('Show answer works!')
  $('#message').css('background-color', '#d5fdd5')
  $('form').trigger('reset')
}
const showAnswerFailure = function (data) {
  $('#message').text('Show answer dedd')
  $('#message').css('background-color', '#ff6666')
  $('form').trigger('reset')
}
const indexAnswerSuccess = function (data) {
  console.log(data.answers)
  // console.log(data.answers.survey)
  // for (let i = 0; i < data.answers.length; i++) {
  //   if (data.answers[i].survey === '5af447fdfa042b77d55e3354') {
  //     console.log(data.answer[i]._id)
  //   }
    // console.log(data.answers[i].survey)
  // }
  // const getAnswerHtml = showAnswersTemplate({
  //   answers: data.answers
  // })
  // $('.handlebars').empty() // Prevents the list from duplicating if user clicks "View All Animals" multiple time
  // $('.content').append(getAnswerHtml)
  // $('#clear-list').removeClass('hidden') // Show clear button when user clicks "View All Animals"
  $('#message').text('Index works!')
  $('#message').css('background-color', '#d5fdd5')
  $('form').trigger('reset')
}
const indexAnswerFailure = function (data) {
  $('#message').text('Index dedd')
  $('#message').css('background-color', '#ff6666')
  $('form').trigger('reset')
}
module.exports = {
  createAnswerFailure,
  createAnswerSuccess,
  showAnswerSuccess,
  showAnswerFailure,
  indexAnswerSuccess,
  indexAnswerFailure
}
