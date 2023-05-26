"use strict";
const path = require("path");

const { NODE_ENV } = process.env;

const fastify = require("fastify")({
  logger: {
    prettyPrint: NODE_ENV === "development",
  },
});

fastify.register(require("fastify-cookie"));

fastify.register(require("fastify-static"), {
  root: path.join(__dirname, "dist"),
});

fastify.get("/", (_, reply) => {
  reply.sendFile("index.html");
});

// Register Custom Plugin
fastify.register(require("./plugins/firebasePlugin"));
fastify.register(require("./plugins/googleCloudPlugin"));

// Registering Routes
fastify.register(require("./api"));
fastify.register(require("./api/login"));

// Run the server!
fastify.listen(process.env.PORT || 3000, function(err, address) {
  if (err) {
    fastify.log.error(err);
    process.exit(1);
  }
  fastify.log.info(`QuiPeutMaider retraite Proxy server listening on ${address}`);
});
