const createAnswerSuccess = function (data) {
  console.log(data)
  $('#message').text('Answer created!')
  $('#message').css('background-color', '#d5fdd5')
}

const createAnswerFailure = function (data) {
  $('#message').text('Failed to post answer')
  $('#message').css('background-color', '#ff6666')
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
}
const showAnswerFailure = function (data) {
  $('#message').text('Show answer dedd')
  $('#message').css('background-color', '#ff6666')
}
const indexAnswerSuccess = function (data) {
  console.log(data.answers)
  // const getAnswerHtml = showAnswersTemplate({
  //   answers: data.answers
  // })
  // $('.handlebars').empty() // Prevents the list from duplicating if user clicks "View All Animals" multiple time
  // $('.content').append(getAnswerHtml)
  // $('#clear-list').removeClass('hidden') // Show clear button when user clicks "View All Animals"
  $('#message').text('Index works!')
  $('#message').css('background-color', '#d5fdd5')
}
const indexAnswerFailure = function (data) {
  $('#message').text('Index dedd')
  $('#message').css('background-color', '#ff6666')
}
module.exports = {
  createAnswerFailure,
  createAnswerSuccess,
  showAnswerSuccess,
  showAnswerFailure,
  indexAnswerSuccess,
  indexAnswerFailure
}
