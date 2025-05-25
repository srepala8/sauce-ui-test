
import { Page, Locator, expect } from '@playwright/test';

export class ProductsListPage {
    private readonly page: Page;


    // Locators
    readonly hamburgerMenu: Locator;
    readonly crossButton: Locator;
    readonly allItemsLink: Locator;
    readonly logoutLink: Locator;
    readonly swaglabsLogo: Locator;
    readonly productsText: Locator;
    readonly productsList: Locator;
    readonly productItem: Locator;




    constructor(page: Page) {
        this.page = page;
        this.hamburgerMenu = page.locator('#react-burger-menu-btn');
        this.crossButton = page.locator('#react-burger-cross-btn');
        this.allItemsLink = page.locator('#inventory_sidebar_link');
        this.logoutLink = page.locator('#logout_sidebar_link');
        this.swaglabsLogo = page.locator(".app_logo");
        this.productsText = page.locator('.title');
        this.productsList = page.locator('.inventory_list');
        this.productItem = page.locator("(//div[@class='inventory_item'])");


    }



    // Actions

    async clickOnHamburgerMenu() {
        await this.hamburgerMenu.click();
    }
    async clickOnCrossButton() {
        await this.crossButton.click();
    }

   



    // Assertions

    async assertHamburgerMenuItemsareVisible() {
        await expect(this.allItemsLink).toBeVisible();
        await expect(this.logoutLink).toBeVisible();

    }
    async assertProductListVisible() {
        await expect(this.productsList).toBeVisible();
    }

    
 async assertProductsCountValidation() {
        const productItems = await this.productItem.count();
        console.log(productItems);
        expect(productItems).toBeGreaterThan(0);

    }

}