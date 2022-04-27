// webpack.config.js
const Dotenv = require("dotenv-webpack");

module.exports = {
  plugins: [
    new Dotenv({
      path: path.join(__dirname, "/.env"),
      allowEmptyValues: true,
      systemvars: true,
      silent: true,
      defaults: true,
    }),
  ],
};
