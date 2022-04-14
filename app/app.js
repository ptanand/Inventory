// use require with a reference to bundle the file and use it in this file
const authEvents = require('./auth/events.js')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  $('#non-member').on('click', function () {
    $('#sign-up-form').toggle()
    $('#sign-in-form').hide()
  })
  $('#sign-up-form').on('submit', authEvents.onSignup)
  $('#members').on('click', function () {
    $('#sign-in-form').toggle()
    $('#sign-up-form').hide()
  })
  $('#sign-in-form').on('submit', authEvents.onSignIn)
  $('#sign-out-button').on('click', authEvents.onSignOut)
  $('#todo-E').on('click', function () {
    $('#enter-P').toggle()
  })
  $('#enter-P').on('submit', authEvents.onCreate)
})
