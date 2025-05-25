
import { Page, Locator, expect } from '@playwright/test';

export class CartOperationPage {
    private readonly page : Page;


    // Locators
    readonly addToCartLink: Locator;
    readonly removeButton: Locator;
    readonly cartLink: Locator;
    readonly quantityInCart: Locator;
    readonly itemName: Locator;
    readonly itemPrice: Locator;
    readonly cartBadge: Locator;






    constructor(page: Page) {
        this.page = page;
        this.addToCartLink = page.locator("//button[@id='add-to-cart-sauce-labs-backpack']");
        this.removeButton = page.locator('#remove-sauce-labs-backpack');
        this.cartLink = page.locator('.shopping_cart_link');
        this.quantityInCart = page.locator("//div[@class='cart_quantity']");
        this.itemName = page.locator(".inventory_item_name");
        this.itemPrice = page.locator('.inventory_item_price');
        this.cartBadge = page.locator('.shopping_cart_badge');



    }



    // Actions

    async clickOnaddToCartLink() {
        await this.addToCartLink.click();
    }
    async clickOnCartLink() {
        await this.cartLink.click();
    }

    async getCartQuantity() {

        return await this.quantityInCart.textContent();

        
    }

    async getItemName() {

        return await this.itemName.textContent();
    }

    async getItemPrice() {

        return await this.itemPrice.textContent();

    }

    async clickOnRemoveButton() {
        this.removeButton.click();
    }



    // Assertions

    async assertOnAddProductListed() {
        await this.clickOnaddToCartLink()
        await expect(this.cartBadge).toBeVisible()
        await this.clickOnCartLink()
        expect(Number(await this.getCartQuantity())).toBeGreaterThan(0);
        expect(await this.getItemName()).toContain('Sauce')
        expect(await this.getItemPrice()).toBe('$29.99')

    }
    async assertOnRemoveProduct() {
        await this.clickOnaddToCartLink()
        await expect(this.removeButton).toBeVisible()
        await this.clickOnRemoveButton()
        await this.clickOnCartLink()
        await expect(this.quantityInCart).not.toBeVisible();
       


    }




}