const store = require('../store')

const signUpSuccess = function (data) {
  $('#message').text('Successfully signed up')
  $('#message').css('background-color', '#d5fdd5')
}

const signUpFailure = function (data) {
  $('#message').text('Failure signing up')
  $('#message').css('background-color', '#ff6666')
}

const signInSuccess = function (data) { // represents what the api is sending back (the api response)
  $('#message').text('Successfully signed in')
  $('#message').css('background-color', '#d5fdd5')
  $('#change-password').removeClass('hidden')
  $('#sign-out').removeClass('hidden')
  $('#sign-in').addClass('hidden')
  $('#sign-up').addClass('hidden')
  // $('.content').removeClass('hidden')
  store.user = data.user
}

const signInFailure = function (data) {
  $('#message').text('Failure signing in')
  $('#message').css('background-color', '#ff6666')
}

const signOutSuccess = function (data) {
  $('#message').text('Successfully signed out')
  $('#message').css('background-color', '#d5fdd5')
  store.user = null
  $('#change-password').addClass('hidden')
  $('#sign-out').addClass('hidden')
  $('#sign-in').removeClass('hidden')
  $('#sign-up').removeClass('hidden')
  $('input[type=email]').val('')
  $('input[type=text]').val('')
  $('input[type=password]').val('')
  $('#create-animal').addClass('hidden')
  $('#update-animal').addClass('hidden')
  $('#delete-animal').addClass('hidden')
  $('.content').addClass('hidden')
}

const signOutFailure = function (data) {
  // console.log('signup failure')
  $('#message').text('Failure signing out')
  $('#message').css('background-color', '#F2DEDE')
  setTimeout(() => $('#message').text(''), 3000)
}

const changePassSuccess = function (data) {
  $('#message').text('Successfully changed password')
  $('#message').css('background-color', '#d5fdd5')
}

const changePassFailure = function (data) {
  $('#message').text('Failure changing password')
  $('#message').css('background-color', '#ff6666')
}

module.exports= {
  signUpSuccess,
  signUpFailure,
  signInFailure,
  signInSuccess,
  changePassSuccess,
  changePassFailure,
  signOutSuccess,
  signOutFailure
}
