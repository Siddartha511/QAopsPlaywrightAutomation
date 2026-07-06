// @ts-check
import { devices } from '@playwright/test';
import { TIMEOUT } from 'node:dns';
import { defineConfig } from '@playwright/test';
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
const config = ({
  testDir: './tests',
  testMatch: '**/*.spec.js',
  reporter: 'html',
  retries: 2,
  use: {

    headless: false,
    trace: 'on-first-retry',
    browserName: 'chromium'
  },

});
module.exports = config;

