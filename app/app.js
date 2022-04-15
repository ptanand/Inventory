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
  $('#update-p-word').on('submit', authEvents.onUpPassword)
  $('#enter-P').on('submit', authEvents.onCreate)
  $('#todo-S').on('click', authEvents.onIndex)
  $('#update-p').on('click', function () {
    $('#update-p-word').show()
  })
  $('#update-btn').on('click', function () {
    $('#update-p').hide()
    $('#update-p-word').hide()
  })
  $('#todo-U').on('click', function () {
    $('#enter-U').show()
  })
  $('#enter-U').on('submit', authEvents.onUpdateInventory)
})
