// tests/login.pom.spec.ts
import { test } from '@playwright/test';
import { LoginPage } from '../page-objects/loginPage';
import { ProductsListPage } from '../page-objects/productListPage';
import { CartOperationPage } from '../page-objects/cartOperationPage';
import { CheckoutflowPage } from '../page-objects/checkOutFlowPage';
import { validCredentials } from '../config/test-data';


test.describe('Login Tests', () => {
  let loginPage: LoginPage;
  let productslistPage: ProductsListPage;
  let cartOperationPage :CartOperationPage
  let checkoutflowpage : CheckoutflowPage

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    await loginPage.navigateToLoginPage();
    await loginPage.login(validCredentials.username, validCredentials.password);
    productslistPage=new ProductsListPage(page);
    cartOperationPage= new CartOperationPage(page);
    await cartOperationPage.clickOnaddToCartLink();
    await cartOperationPage.clickOnCartLink();
    checkoutflowpage= new CheckoutflowPage(page)
  });


  test('Should check the Check out flow Process ', async () => {

   await checkoutflowpage.assertOnCheckoutFlow();


  });
 test('should Check your info form visible', async () => {
    await checkoutflowpage.clickOnCheckOut();
  await checkoutflowpage.assertYourInfoFormIsVisible();


  });

test('should Check that the Order completion', async () => {
   await checkoutflowpage.assertOnCheckoutFlow();
   await checkoutflowpage.assertOnOrderCompletion();


  });

 
 

});