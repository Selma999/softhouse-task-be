"use strict";

const fp = require("fastify-plugin");
const cors = require("@fastify/cors");

/**
 * This plugins adds some utilities to handle http errors
 *
 * @see https://github.com/fastify/fastify-sensible
 */
module.exports = fp(async function (fastify, opts) {
  fastify.register(cors, {
    origin: [
      "https://648a32c8fbb3a80b19eedfb0--endearing-treacle-f65767.netlify.app/",
      "http://127.0.0.1:5173",
    ],
  });

  fastify.register(require("@fastify/sensible"), {
    errorHandler: false,
  });
});
