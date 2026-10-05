// @ts-check
import { defineConfig, devices } from '@playwright/test';

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// import dotenv from 'dotenv';
// import path from 'path';
// dotenv.config({ path: path.resolve(__dirname, '.env') });

/**
 * @see https://playwright.dev/docs/test-configuration
 */
export default defineConfig({
  testDir: './tests',
  timeout: 40 * 1000,  //default 30*1000 chnaged to 40
  expect: {
    timeout: 50 * 1000
  },
  use: {
    baseURL: "https://www.demoblaze.com",
    headless: true,
    screenshot: "only-on-failure",
    video: "retain-on-failure",
    trace: "retain-on-failure"
  },
  retries: 1,
  /* Run tests in files in parallel */
  fullyParallel: true,
 
  //reporter: 'html',
  reporter:[
    ["allure-playwright"]
  ],
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */


  /* Configure projects for major browsers */
  projects: [
    {
      name: 'ChromeProject',
      use: {

        headless: true,
        screenshot: 'only-on-failure',
        video: "retain-on-failure",

        /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
        trace: 'retain-on-failure',
        browserName: 'chromium'


      },
    },
    {
      name: 'firefoxProject',
      use: {

        headless: false,
        screenshot: 'only-on-failure',
        video: "retain-on-failure",

        /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
        trace: 'retain-on-failure',
        browserName: 'firefox'


      }
    },

    {
      name: 'webkitProject',
      use: {

        headless: false,
        screenshot: 'only-on-failure',
        video: "retain-on-failure",

        /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
        trace: 'retain-on-failure',
        browserName: 'webkit'


      }
    }
  ]


  /* Test against mobile viewports. */
  // {
  //   name: 'Mobile Chrome',
  //   use: { ...devices['Pixel 5'] },
  // },
  // {
  //   name: 'Mobile Safari',
  //   use: { ...devices['iPhone 12'] },
  // },

  /* Test against branded browsers. */
  // {
  //   name: 'Microsoft Edge',
  //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
  // },
  // {
  //   name: 'Google Chrome',
  //   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
  // },
  // ],

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://localhost:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});

