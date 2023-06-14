"use strict";

const fs = require("fs");

module.exports = async function (fastify, opts) {
  fastify.post("/save-json", async function (request, reply) {
    // Request body contains json from frontend

    // Extract json from request
    const { body } = request;

    try {
      if (!fs.existsSync("files")) {
        fs.mkdirSync("files");
      }

      // Save json to file
      fs.writeFileSync("files/data.json", JSON.stringify(body));

      // Return response if successful
    } catch (err) {
      console.log(err);

      return { success: false };
    }

    return { success: true };
  });
};
