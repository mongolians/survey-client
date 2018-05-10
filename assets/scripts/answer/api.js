const config = require('../config')
const store = require('../store')

const createAnswer = function (data) {
  return $.ajax({
    url: config.apiUrl + '/answers',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}
const indexAnswer = function (data) {
  return $.ajax({
    url: config.apiUrl + '/answers',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}
const showAnswer = function (data) {
  return $.ajax({
    url: config.apiUrl + '/answers/' + data,
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  createAnswer,
  showAnswer,
  indexAnswer
}
