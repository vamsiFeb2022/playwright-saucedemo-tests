import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/loginPage';
import { ProductsPage } from '../pages/productsPage';
import { CartPage } from '../pages/cartPage';

test('user can add a product to the cart', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const productsPage = new ProductsPage(page);
  const cartPage = new CartPage(page);

  await loginPage.goto('https://www.saucedemo.com');
  await loginPage.login('standard_user', 'secret_sauce');

  await productsPage.addProductToCart('sauce-labs-backpack');
  await productsPage.goToCart();

  const itemCount = await cartPage.getItemCount();
  expect(itemCount).toBe(1);
});
