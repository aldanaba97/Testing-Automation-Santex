const { defineConfig } = require("cypress");

module.exports = defineConfig({
  
  chromeWebSecurity:false,
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    charts: true, 
    reportPageTitle: 'Reporte Saudemo', 
    embeddedScrenshoots: true, 
    inlineAssets: true, 
  },
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);  
      // implement node event listeners here
    },
  },

  video: true, 
  screenshotOnRunFailure: true, 
  videosFolder: 'cypress/videos',
  screenshotsFolder: 'cypress/screenshots',


});
