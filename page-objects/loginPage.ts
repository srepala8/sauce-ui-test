
import { Page, Locator, expect } from '@playwright/test';

export class LoginPage {
  private readonly page: Page;
 

  // Locators
  readonly usernameInput: Locator;
  readonly passwordInput: Locator;
  readonly loginButton: Locator;
  readonly errorMessage: Locator;
  

  constructor(page: Page) {
    this.page = page;
    this.usernameInput = page.locator('#user-name');
    this.passwordInput = page.locator('#password');
    this.loginButton = page.locator('#login-button');
    this.errorMessage = page.locator("h3[data-test='error']");
   
  }

  // Navigation
  async navigateToLoginPage() {
    await this.page.goto('/');
    await this.page.waitForLoadState('networkidle');
  }

  // Actions
  async enterUsername(username: string) {
    await this.usernameInput.fill(username);
  }

  async enterPassword(password: string) {
    await this.passwordInput.fill(password);
  }

  async clickSubmit() {
    await this.loginButton.click();
  }

  

  // Combined action for typical login flow
  async login(username: string, password: string) {
    await this.enterUsername(username);
    await this.enterPassword(password);
    await this.clickSubmit();
  }

  // Assertions
  async assertErrorMessageContains(text: string) {
    await expect(this.errorMessage).toContainText(text);
  }

  
  async assertLoginFormIsVisible() {
    await expect(this.usernameInput).toBeVisible();
    await expect(this.passwordInput).toBeVisible();
    await expect(this.loginButton).toBeVisible();
  }

  async assertRedirectedToInventoryUrl() {
    await this.page.waitForURL('https://www.saucedemo.com/inventory.html');
    await expect(this.page).toHaveURL('https://www.saucedemo.com/inventory.html');
  }
}