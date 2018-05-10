const config = require('../config')
const store = require('../store')

const createSurvey = function (data) {
  return $.ajax({
    url: config.apiUrl + '/surveys',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}
const indexSurvey = function (data) {
  return $.ajax({
    url: config.apiUrl + '/surveys',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}
const showSurvey = function (data) {
  return $.ajax({
    url: config.apiUrl + '/surveys/' + data,
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}
const deleteSurvey = function (data) {
  return $.ajax({
    url: config.apiUrl + '/surveys/' + data,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}
const updateSurvey = function (data) {
  return $.ajax({
    url: config.apiUrl + '/surveys/' + data.survey.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}
module.exports = {
  createSurvey,
  indexSurvey,
  showSurvey,
  deleteSurvey,
  updateSurvey
}
