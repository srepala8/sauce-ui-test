
import { Page, Locator, expect } from '@playwright/test';
import { yourInformation } from '../config/test-data';


export class CheckoutflowPage {
  private readonly page: Page;

  // Locators
  readonly checkOutButton: Locator;
  readonly checkoutTitle: Locator;
  readonly continueButton: Locator;
  readonly firstNameInput: Locator;
  readonly LastNameInput: Locator;
  readonly zipCodeInput: Locator;
  readonly itemPrice: Locator;
  readonly totalSummary: Locator;
  readonly finishButton: Locator;
  readonly CheckoutComplete: Locator;
  readonly thankyouText:Locator;
  readonly backHome: Locator;


  constructor(page: Page) {
    this.page = page;
    this.checkOutButton = page.locator('#checkout');
    this.continueButton = page.locator('#continue');
    this.checkoutTitle = page.locator('.title')
    this.firstNameInput = page.locator(' #first-name');
    this.LastNameInput = page.locator('#last-name');
    this.zipCodeInput = page.locator("#postal-code");
    this.itemPrice = page.locator('.inventory_item_price');
    this.totalSummary = page.locator('.summary_total_label');
    this.finishButton = page.locator('#finish')
    this.CheckoutComplete=page.locator("//span[contains(text(),'Checkout: Complete!')]")
    this.thankyouText=page.locator('.complete-header')
    this.backHome=page.locator('#back-to-products')


  }

  // Actions

  async clickOnCheckOut() {
    await this.checkOutButton.click();
  }
  async enterFirstname(firstname: string) {
    await this.firstNameInput.fill(firstname);
  }

  async enterLastname(lastname: string) {
    await this.LastNameInput.fill(lastname);
  }
  async enterZipCode(zipcode: string) {
    await this.zipCodeInput.fill(zipcode);
  }
  async checkOutTitle() {
    return await this.checkoutTitle.textContent();
  }
  async clickOnContinueButton() {
    await this.continueButton.click();
  }

  async clickOnFinishButton() {
    await this.finishButton.click();
  }

  async fillYourInfo(firstname: string, lastname: string, zipcode: string) {
    await this.enterFirstname(firstname);
    await this.enterLastname(lastname);
    await this.enterZipCode(zipcode);

  }

  // Assertions

  async assertOnCheckoutFlow() {
    await this.clickOnCheckOut()
    expect(await this.checkOutTitle()).toContain('Checkout')
    await this.fillYourInfo(yourInformation.firstname, yourInformation.lastname, yourInformation.zipcode)
    await expect(this.continueButton).toBeVisible()
    await this.clickOnContinueButton()
    await expect(this.page.getByText('Payment Information:')).toBeVisible();
    await expect(this.totalSummary).toContainText('Total')
    await expect(this.finishButton).toBeVisible()
    await this.clickOnFinishButton()


  }
  async assertOnOrderCompletion() {
    

    await expect(this.CheckoutComplete).toContainText('Checkout')
    await expect(this.thankyouText).toContainText('Thank you')
    await expect(this.backHome).toBeVisible();

  }
  async assertYourInfoFormIsVisible() {
    await expect(this.firstNameInput).toBeVisible();
    await expect(this.LastNameInput).toBeVisible();
    await expect(this.zipCodeInput).toBeVisible();
  }

}