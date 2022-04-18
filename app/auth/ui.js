'use strict'

const store = require('../store.js')

const onSignupSuccess = function () {
  $('#auth-display').html(
    "<p>Welcome! You are an approved a member'</p>"
  ).show()

  $('form').trigger('reset')
  $('#sign-up-form').hide()
  $('#auth-display-m').html("<p>Congratulations! You are now a member, click on MEMBER to sign in.'</p>").fadeIn(8000).fadeOut(5000)
}

const onSignupFailure = function () {
  $('#auth-display').html('<p>Error while signing up</p>')
}

const onSignInSuccess = function (response) {
  console.log(response)
  store.user = response.user
  $('#auth-display1').html('<p>User signed in successfully</p>').show().fadeOut(6000)
  $('form').trigger('reset')
  $('#sign-in-form').hide()
  $('#members').hide()
  $('#non-member').hide()
  $('#auth-display-sign-in').html('<p>You can chose above or Click "Show Prodcts" and make a choice to the right  -------></p>').show()
  $('#sign-out-button').show()
  $('#todo-E').show()
  $('#todo-S').show()
  $('#update-p').show()
  $('#auth-display').fadeOut(4000)
  // $('#').toggle
}

const onSignInFailure = function () {
  $('#auth-display1').html('<p>Error while signing in</p>').show()
  $('form').trigger('reset')
  $('#sign-in-form').show()
}
4
const changePasswordSuccess = function () {
  $('#up-pass-display')
    .html('<p>Password updated successfully</p>')
    .show()
    .fadeOut(5000)
}

const changePasswordFailure = function () {
  $('#up-pass-display')
    .html('<p>Error while updating password</p>')
    .show()
    .fadeOut(5000)
}

const onSignOutSuccess = function () {
  $('#auth-display2').html('<p>User logging out successfully</p>').show().fadeOut(2000)
  $('#sign-out-button').hide()
  $('form').trigger('reset')
  $('#non-member').show()
  $('#members').show()
  $('#todo-S').hide()
  $('#inventory-display').fadeOut(4000)
  $('#todo-E').hide()
  $('#update-p').hide()
  $('#auth-display').fadeOut(5000)
  // $('#auth-display-sign-in').hide()
  $('#auth-display-sign-in').fadeOut(4000)
  $('.enter').fadeOut(2000)
  $('.todo').fadeOut(2000)
}

const onSignOutFailure = function () {
  $('#auth-display2').html('<p>Error while logging out</p>').show()
}

const onCreateSuccess = function () {
  $('#display-C').html('<p>Product Created successfully.  </p>').show().fadeOut(8000)
  $('form').trigger('reset').hide()
  // $('#todo-E')
//   $('#enter-P').hide()
}

const onCreateFailure = function () {
  $('#display-C').html('<p>CREATION ERROR</p>').show()
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
      <form class="inventory-update-dynamic" data-id=${inventory._id}>
        <input type="text" name="inventory[name]" placeholder="Product Name Here">
        <input type="text" name="inventory[description]" placeholder="Description Here">
        <input type="text" name="inventory[price]" placeholder="Price Here">
        <input type="text" name="inventory[quantity]" placeholder="Quantity Here">
        <button class='inventory-update' type="submit">Update Inventory</button>
      </form>
      <button class='inventory-delete-dynamic' data-id=${inventory._id}>Delete Product</button>
      <br>
    </div>
    `
  })
  $('#inventory-display').html(inventoryHtml).show()
  // $('#todo-U').show()
  // $('#todo-del').show()
}

const onIndexFailure = function () {
  $('inventory-display').html('<p>Index ERROR</p>').show()
}

const onUpdateSuccess = function (responseData) {
  $('#auth-display3').html('You successfully updated the inventory').show().fadeOut(4000)

  // reset all forms
  $('form').trigger('reset').hide()
}

const onDeleteInSuccess = function () {
  $('#auth-display4').html('Product successfully deleted!').show().fadeOut(5000)
  $('#auth-display4').html(
    'A Product was deleted! Click  Enter Product to add.').fadeIn(3000).fadeOut(6000)
  // $('#inventory-destroy-message').addClass('success')
  // setTimeout(() => {
  //   $('#inventory-destroy-message').html('')
  //   $('#inventory-destroy-message').removeClass('success')
  // }, 5000)

  // reset all forms
  $('form').trigger('reset').hide()
}

const onUpdateFailure = function () {
  $('#auth-display3').html('<p>HEY! YOU CAN ONLY UPDATE YOUR OWN PRODUCT</p>').show().fadeOut(8000)
}

const onDeleteFailure = function () {
  $('#auth-display4')
    .html('<p>HEY! YOU CAN ONLY DELETE YOUR OWN PRODUCT</p>')
    .show()
    .fadeOut(8000)
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
  changePasswordSuccess,
  changePasswordFailure,
  onIndexSuccess,
  onIndexFailure,
  onUpdateSuccess,
  onUpdateFailure,
  onDeleteInSuccess,
  onDeleteFailure
}
