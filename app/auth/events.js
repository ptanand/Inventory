'use strict'

const authApi = require('./api.js')
const getFormFields = require('../../lib/get-form-fields.js')
const linkUi = require('./ui.js')
// const { event } = require('grunt')
// const store = require('../store.js')

const onSignup = function (event) {
  event.preventDefault()

  console.log('anand') // need to remove this !!!!!!!!!!!!!!!!!!!!!

  const form = event.target
  const data = getFormFields(form)
  console.log(data)

  authApi
    .onSignup(data)
    .then(() => linkUi.onSignupSuccess())
    .catch(() => linkUi.onSignupFailure())
}

function onSignIn (event) {
  event.preventDefault()

  console.log('maharaj') // need to remove this after testing!!!!!!!!!

  const form = event.target
  const data = getFormFields(form)
  console.log(data) // need to delete this after

  authApi
    .onSignIn(data)
    .then((response) => linkUi.onSignInSuccess(response))
    .catch(() => linkUi.onSignInFailure())
}

const onSignOut = function () {
  authApi
    .onSignOut()
    .then(() => linkUi.onSignOutSuccess())
    .catch(() => linkUi.onSignOutFailure())
}

const onCreate = function (event) {
  event.preventDefault()

  console.log('anandi') // need to remove this

  const form = event.target
  const data = getFormFields(form)
  console.log(data)
  console.log('hi')
  authApi
    .onCreate(data)
    .then(() => linkUi.onCreateSuccess())
    .catch(() => linkUi.onCreateFailure())
}

module.exports = {
  onSignup,
  onSignIn,
  onSignOut,
  onCreate

}
