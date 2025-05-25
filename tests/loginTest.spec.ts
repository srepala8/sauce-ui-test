// tests/login.pom.spec.ts
import { test } from '@playwright/test';
import { LoginPage } from '../page-objects/loginPage';
import { validCredentials, invalidCredentials } from '../config/test-data';


test.describe('Login Tests', () => {
  let loginPage: LoginPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    await loginPage.navigateToLoginPage();
  });

  test('should display login form', async () => {
    await loginPage.assertLoginFormIsVisible();
  });

  test('should show error message for invalid credentials', async () => {
    await loginPage.login(invalidCredentials.username, invalidCredentials.password);
    await loginPage.assertErrorMessageContains('Epic sadface: Username and password do not match any user in this service');
  });

  test('should redirect to inventory after successful login', async () => {
    await loginPage.login(validCredentials.username, validCredentials.password);
    await loginPage.assertRedirectedToInventoryUrl();
  });


});