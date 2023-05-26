"use strict"

const fastifyPlugin = require("fastify-plugin")
const firebase = require('firebase-admin');


async function firebasePlugin(fastify, params) {
  firebase.initializeApp({
    credential: firebase.credential.applicationDefault(),
  })
  
  fastify.decorate("firebase", firebase)
}

module.exports = fastifyPlugin(firebasePlugin)