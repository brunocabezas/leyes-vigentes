"use strict";
const presets = [
  [
    "@babel/preset-env",
    {
      debug: false,
      targets: {
        browsers: ["last 3 versions"]
      }
    }
  ],
  "@vue/app"
];
const plugins = [];
module.exports = {
  presets,
  plugins
};
