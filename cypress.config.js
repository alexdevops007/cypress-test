const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: '96jhgu',
  e2e: {
    baseUrl: "https://practice.expandtesting.com/notes/app",
    specPattern: "cypress/e2e/**/*.{js,jsx,ts,tsx}",
    viewportHeight: 900,
    viewportWidth: 1440,
    video: true,
    screenShotsFolder: 'cypress/screenshots',
    videosFolder: 'cypress/videos',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    experimentalStudio: true,
  },
});
