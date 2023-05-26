"use strict"


const fastifyPlugin = require("fastify-plugin")
const {GoogleAuth}  = require('google-auth-library')



async function googleCloudPlugin(fastify) {
    fastify.decorate('googleAuth', {
        client: new GoogleAuth(),
    })
}

module.exports = fastifyPlugin(googleCloudPlugin)