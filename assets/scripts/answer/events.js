const getFormFields = require('../../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')
const store = require('../')

const onCreateAnswer = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  // console.log(data.answer.survey)
  api.createAnswer(data)
    .then(ui.createAnswerSuccess)
    .catch(ui.createAnswerFailure)
  // console.log('working')
}
const onShowAnswer = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.showAnswer(data.answer.id)
    .then(ui.showAnswerSuccess)
    .catch(ui.showAnswerFailure)
}
const onIndexAnswer = function () {
  event.preventDefault()
  api.indexAnswer()
    .then(ui.indexAnswerSuccess)
    .catch(ui.indexAnswerFailure)
}

// const responseTotal = function () {
//
// }

const addHandlers = function () {
  $('.content').on('submit', '.create-answer', onCreateAnswer)
  $('.content').on('submit', '.index-answer', onIndexAnswer)
  $('#show-answer').on('submit', onShowAnswer)
  // $('#delete-answer').on('submit', onDeleteAnswer)
  // $('#update-answer').on('submit', onUpdateAnswer)
}
module.exports = {
  addHandlers
}
