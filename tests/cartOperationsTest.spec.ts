// tests/login.pom.spec.ts
import { test } from '@playwright/test';
import { LoginPage } from '../page-objects/loginPage';
import { ProductsListPage } from '../page-objects/productListPage';
import { CartOperationPage } from '../page-objects/cartOperationPage';
import { validCredentials } from '../config/test-data';


test.describe('Login Tests', () => {
  let loginPage: LoginPage;
  let productslistPage: ProductsListPage;
  let cartOperationPage :CartOperationPage

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    await loginPage.navigateToLoginPage();
    await loginPage.login(validCredentials.username, validCredentials.password);
    productslistPage=new ProductsListPage(page);
    cartOperationPage= new CartOperationPage(page);
  });


  test('should Check Add a product to cart and verift its listed', async () => {

   await cartOperationPage.assertOnAddProductListed();


  });


test('should Check Remove a product from cart', async () => {

   await cartOperationPage.assertOnRemoveProduct();


  });
 

});