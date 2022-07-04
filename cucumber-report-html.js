const report = require('multiple-cucumber-html-reporter');

report.generate({
  jsonDir: 'cypress/cucumber-json',
  reportPath: './reports',
  metadata: {
    browser: {
      name: 'chrome',
      version: '',
    },
    device: '',
    platform: {
      name: '',
      version: '',
    },
  },
});
