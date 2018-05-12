// const global = require('../global')
const store = require('../store')

const createAnswerSuccess = function (data) {
  // console.log(data)
  // console.log(data.answer.survey)
  const modalId = data.answer.survey
  console.log(modalId)
  $('#' + data.answer.survey + ' .modal-message').text('Answer created!')
  $('#' + data.answer.survey + ' .modal-message').css('background-color', '#d5fdd5')
  $('#' + modalId + ' .index-answer').removeClass('hidden')
  $('#' + modalId + ' .create-answer').addClass('hidden')
  $('form').trigger('reset')
  console.log($('#' + data.answer.survey + ' .modal-message'))
}

const createAnswerFailure = function (data) {
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
const indexAnswerSuccess = function (data, surveyId) {
  // console.log(data.answers)
  // console.log(data.answers.survey)
  console.log(store.surveyID)
  // console.log($('.answer-modal').attr('id'))
  const totalArray = []
  const oneArray = []
  const twoArray = []
  const threeArray = []
  const fourArray = []
  const fiveArray = []
  for (let i = 0; i < data.answers.length; i++) {
    if (data.answers[i].survey === surveyId) {
      totalArray.push(data.answers[i].response)
      console.log('response is ' + data.answers[i].response + ' with ID ' + data.answers[i]._id + ' on survey ' + store.surveyID)
      if (data.answers[i].response === '5') {
        fiveArray.push(data.answers[i].response)
      } else if (data.answers[i].response === '4') {
        fourArray.push(data.answers[i].response)
      } else if (data.answers[i].response === '3') {
        threeArray.push(data.answers[i].response)
      } else if (data.answers[i].response === '2') {
        twoArray.push(data.answers[i].response)
      } else if (data.answers[i].response === '1') {
        oneArray.push(data.answers[i].response)
      }
    }
  }
  console.log(totalArray)
  // console.log(totalArray.length)

  console.log(fiveArray)
  console.log('# of 5s ' + fiveArray.length)
  console.log(fourArray)
  console.log('# of 4s ' + fourArray.length)
  console.log(threeArray)
  console.log('# of 3s ' + threeArray.length)
  console.log(twoArray)
  console.log('# of 2s ' + twoArray.length)
  console.log(oneArray)
  console.log('# of 1s ' + oneArray.length)

  $('#' + surveyId + ' .results').empty()
  $('#' + surveyId + ' .results').append(`
    <table>
      <thead>
        <tr>
          <th align="center">Category</th>
          <th align="center">Total Responses</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td align="left"> Strongly Agree </td>
          <td align="center">${fiveArray.length}</tdr>
        </tr>
        <tr>
          <td align="left"> Agree </td>
          <td align="center">${fourArray.length}</td>
        </tr>
        <tr>
          <td align="left"> Neutral </td>
          <td align="center">${threeArray.length}</td>
        </tr>
        <tr>
          <td align="left"> Disagree </td>
          <td align="center">${twoArray.length}</td>
        </tr>
        <tr>
          <td align="left"> Strongly Agree </td>
          <td align="center">${oneArray.length}</td>
        </tr>
        <tr>
          <td align="left"> Total Responses </td>
          <td align="center">${totalArray.length}</td>
      </tbody>
    </table>
    `)

  // console.log(store.surveyID)
  // $('#' + store.surveyID + ' .result').append('hi')
  // console.log(resultDiv)
  // console.log($(resultDiv).val())

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
