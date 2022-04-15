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
  const form = event.target
  const data = getFormFields(form)
  console.log(data) // need to delete this after

  authApi
    .onSignIn(data)
    .then((response) => linkUi.onSignInSuccess(response))
    .catch(() => linkUi.onSignInFailure())
}

const onUpPassword = function (event) {
  event.preventDefault()
  console.log('change password ran!')

  const data = getFormFields(event.target)
  console.log(data)
  authApi
    .onUpPassword(data)
    .then(linkUi.changePasswordSuccess)
    .catch(linkUi.changePasswordFailure)
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
  authApi
    .onCreate(data)
    .then(() => linkUi.onCreateSuccess())
    .catch(() => linkUi.onCreateFailure())
}

// Show every book (an index or list action)
const onIndex = function () {
  // make API call to get all of the books
  authApi.onIndex()

  // if API call is successful then pass the data to the onIndexSuccess function
    .then(response => linkUi.onIndexSuccess(response))

  // if API call fails then run our onError function
    .catch(linkUi.onIndexFailure)
}

// const onDynamicUpdateInventory = function (event) {
//   event.preventDefault()
//   const updateForm = event.target
//   const id = $(updateForm).data('id')
//   const formData = getFormFields(event.target)

//   authApi.update(id, formData)
//     .then(response => console.log(response))
//     .then(linkUi.onUpdateSuccess)
//     .catch(linkUi.onError)
// }

const onUpdateInventory = function (event) {
  event.preventDefault()
  // const formData = getFormFields(event.target)
  // const id = formData.id
  const updateForm = event.target

  const id = $(updateForm).data('id')
  const formData = getFormFields(event.target)
  authApi.onUpdateIn(id, formData)
    .then(linkUi.onUpdateSuccess)
    .then(onIndex)
    .catch(linkUi.onError)
}

const onDeleteInventory = function (event) {
  // event.preventDefault()
  // console.log('HELLO!!')
  // const formData = getFormFields(event.target)
  const deleteButton = event.target
  const id = $(deleteButton).data('id')
  authApi.onDeleteIn(id)
    .then(linkUi.onDeleteInSuccess)
  // .then(linkUi.onSignInSuccess)
    .then(onIndex)
    .catch(linkUi.onError)
}

module.exports = {
  onSignup,
  onSignIn,
  onSignOut,
  onCreate,
  onUpPassword,
  onIndex,
  // onDynamicUpdateInventory,
  onUpdateInventory,
  onDeleteInventory
  // onShow

}
