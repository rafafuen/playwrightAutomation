// @ts-nocheck
const { devices } = require('@playwright/test');

const config = {
  testDir: './tests',
  retries :0,
  
  /* Maximum time one test can run for. */
  timeout: 30 * 1000,
  expect: {
  
    timeout: 5000
  },
  
  reporter: 'html',
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {

    browserName : 'chromium',
    headless : false,
    screenshot : 'on',
    trace : 'retain-on-failure',//off,on
    
    name: 'firefox',
    use: { ...devices['Desktop Firefox'] },

    name: 'webkit',
    use: { ...devices['Desktop Safari'] },
  },

};

module.exports = config;
