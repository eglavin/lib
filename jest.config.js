/**
 * @type {import('@jest/types').Config.InitialOptions}
 */
module.exports = {
  testEnvironment: "jsdom",
  moduleNameMapper: {
    ".css$": "identity-obj-proxy",
  },
};
