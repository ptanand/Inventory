'use strict'

const store = require('../store.js')
const config = require('../config')

const onSignup = function (data) {
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/sign-up',
    data
  })
}

const onSignIn = function (data) {
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/sign-in',
    data
  })
}
const onSignOut = function () {
  return $.ajax({
    url: config.apiUrl + '/sign-out',
    method: 'DELETE',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

const onUpPassword = function (data) {
  // console.log('data is ', data)
  return $.ajax({
    url: config.apiUrl + '/change-password',
    method: 'PATCH',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    data: data
    // data: data
  })
}

const onCreate = function (data) {
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/inventory',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    data: { inventory: data }
  })
}

const onIndex = function () {
  return $.ajax({
    url: config.apiUrl + '/inventory',
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

const onUpdateIn = function (id, formData) {
  return $.ajax({
    url: config.apiUrl + '/inventory/' + id,
    method: 'PATCH',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    data: formData
  })
}

const onDeleteIn = function (id) {
  // console.log(id)
  // console.log(store)// delete this
  return $.ajax({
    method: 'DELETE',
    url: config.apiUrl + '/inventory/' + id,
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

module.exports = {
  onSignup,
  onSignIn,
  onUpPassword,
  onSignOut,
  onCreate,
  onIndex,
  onUpdateIn,
  onDeleteIn
  // onShow

}
