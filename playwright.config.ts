import { defineConfig, devices } from '@playwright/test';


 
export default defineConfig({
  testDir: './tests',
 
  fullyParallel: true,
 
  reporter: 'html',
  //reporter: [["line"], ["allure-playwright"]],
  
  use: {
    baseURL: 'https://www.saucedemo.com/',
    trace: 'on-first-retry',
    browserName: 'chromium',
   
  },

  
  
   

    
  

 
});
