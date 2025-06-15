const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'can6hq',
  e2e: {
    reporter: 'cypress-mochawesome-reporter',
    reporterOptions: {
      charts: true,
      reportTitle: 'Projeto do curso Cypress'
    },
    baseUrl: 'http://automationpratice.com.br',
    defaultCommandTimeout: 5000,
    viewportWidth: 1920,
    viewportHeight: 1080,
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
});
