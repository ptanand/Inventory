'use strict'

const store = require('../store.js')

const onSignupSuccess = function () {
  $('#auth-display')
    .html('<p>You have signed up successfully. To sign in click \'members\'</p>')
    .show()
    .fadeOut(7000)
  $('form').trigger('reset')
  $('#sign-up-form').hide()
  $('#non-member').hide()
}

const onSignInSuccess = function (response) {
  console.log(response)
  store.user = response.user
  $('#auth-display1').html('<p>User signed in successfully</p>').show().fadeOut(2000)
  $('form').trigger('reset')
  $('#sign-in-form').hide()
  $('#members').hide()
  $('#non-member').hide()
  $('#auth-display-sign-in')
    .html('<p>These are the things you can do as a member:</p>')
    .show()
  $('#sign-out-button').show()
  $('#todo-E').show()
  $('#todo-S').show()
}

const onSignInFailure = function () {
  $('#auth-display1').html('<p>Error while signing in</p>')
  $('form').trigger('reset')
  $('#sign-in-form').show()
}

const onSignupFailure = function () {
  $('#auth-display').html('<p>Error while signing up</p>')
}

const onSignOutSuccess = function () {
  $('#auth-display2').html('<p>User logging out successfully</p>').show().fadeOut(2000)
  $('#sign-out-button').hide()
  $('form').trigger('reset')
  $('#non-member').show()
  $('#members').show()
}

const onSignOutFailure = function () {
  $('#auth-display2').html('<p>Error while logging out</p>')
}
const onCreateSuccess = function () {
  $('#display-C').html('<p>Created successfully</p>')
//   $('#todo-E').hide()
//   $('#enter-P').hide()
}

const onCreateFailure = function () {
  $('#display-C').html('<p>CREATION ERROR</p>')
}

module.exports = {
  onSignupSuccess,
  onSignupFailure,
  onSignInSuccess,
  onSignInFailure,
  onSignOutSuccess,
  onSignOutFailure,
  onCreateSuccess,
  onCreateFailure

}
