'use strict'

// const { config } = require('grunt')
const store = require('../store.js')

const onSignup = function (data) {
  return $.ajax({
    method: 'POST',
    url: 'http://localhost:4741/sign-up',

    data
  })
}

const onSignIn = function (data) {
  return $.ajax({
    method: 'POST',
    url: 'http://localhost:4741/sign-in',
    data
  })
}
const onSignOut = function () {
  return $.ajax({
    method: 'DELETE',
    url: 'http://localhost:4741/sign-out',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

const onCreate = function (data) {
  return $.ajax({
    method: 'POST',
    url: 'http://localhost:4741/inventory',
    data
  })
}
module.exports = {
  onSignup,
  onSignIn,
  onSignOut,
  onCreate

}
