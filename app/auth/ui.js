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

const onSignupFailure = function () {
  $('#auth-display').html('<p>Error while signing up</p>')
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
  $('#update-p').show()
  // $('#').toggle
}

const onSignInFailure = function () {
  $('#auth-display1').html('<p>Error while signing in</p>')
  $('form').trigger('reset')
  $('#sign-in-form').show()
}

const onUpPasswordSuccess = function () {
  $('up-pass-display').html('<p>Password updated successfully</p>').fadeOut(5000)
}

const onUpPasswordFailure = function () {
  $('#auth-display1').html('<p>Error while updating password in</p>').fadeOut(5000)
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
  $('form').trigger('reset').hide()
  $('#todo-E').hide()
//   $('#enter-P').hide()
}

const onCreateFailure = function () {
  $('#display-C').html('<p>CREATION ERROR</p>')
}

const onIndexSuccess = function (responseData) {
  const inventory = responseData.inventory
  console.log(responseData)
  let inventoryHtml = ''
  inventory.forEach((inventory) => {
    inventoryHtml += `
    <div>  
    <h4>Name: ${inventory.name}</h4>
      <p>Description: ${inventory.description}</p>
      <h4>Price: ${inventory.price}</h4>
      <p>Quantity: ${inventory.quantity}</p>
      <p>ID: ${inventory._id}</p>
      
    </div>
    `
  })
  $('#inventory-display').html(inventoryHtml)
  $('#todo-U').show()
}

const onUpdateSuccess = function (responseData) {
  // add success message to our books-update-message element
  $('#inventory-update-message').html('You successfully updated the inventory')

  // empty out the books-display element in case it was displaying information
  // about the book we just updated, replace with a message for the user to get
  // all the books again.
  $('#inventory-display').html(
    'Inventory have changed! Click "Get Show Products", to see all the inventory.'
  )

  // add class for success messaging
  $('#inventory-update-message').addClass('success')

  // use setTimeout to allow the success message to stay for 5 seconds before
  // the message is replaced with '' and the 'success' class is removed
  setTimeout(() => {
    $('#inventory-update-message').html('')
    $('#inventory-update-message').removeClass('success')
  }, 5000)

  // reset all forms
  $('form').trigger('reset').hide()
}

module.exports = {
  onSignupSuccess,
  onSignupFailure,
  onSignInSuccess,
  onSignInFailure,
  onSignOutSuccess,
  onSignOutFailure,
  onCreateSuccess,
  onCreateFailure,
  onUpPasswordSuccess,
  onUpPasswordFailure,
  onIndexSuccess,
  onUpdateSuccess

  // onShowSuccess,
  // onShowFailure

}
