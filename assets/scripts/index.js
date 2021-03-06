'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')
const authEvents = require('./auth/events')
const surveyEvents = require('./survey/events')
const answerEvents = require('./answer/events')
// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  authEvents.addHandlers()
  surveyEvents.addHandlers()
  answerEvents.addHandlers()
})
