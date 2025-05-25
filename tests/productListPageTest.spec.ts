// tests/login.pom.spec.ts
import { test } from '@playwright/test';
import { LoginPage } from '../page-objects/loginPage';
import { ProductsListPage } from '../page-objects/productListPage';
import { validCredentials } from '../config/test-data';


test.describe('Login Tests', () => {
  let loginPage: LoginPage;
  let productslistPage: ProductsListPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    await loginPage.navigateToLoginPage();
    await loginPage.login(validCredentials.username, validCredentials.password);
    productslistPage=new ProductsListPage(page);
  });

  test('should Check Hamburger Menu Items', async () => {
    await productslistPage.clickOnHamburgerMenu();
    await productslistPage.assertHamburgerMenuItemsareVisible();
    await productslistPage.clickOnCrossButton();


  });

  test('should show product list', async () => {
    await productslistPage.assertProductListVisible();
  
  });

   test('should validate the product list', async () => {
    await productslistPage.assertProductsCountValidation();
  
  });

});