"use strict";
const path = require("path");
console.log(path.join(__dirname, "../../udipic-app/build/index.html"));
module.exports = async function (fastify, opts) {
  fastify.register(require("fastify-static"), {
    root: path.join(__dirname, "../../udipic-app/build"),
    prefix: "/",
  });
};
