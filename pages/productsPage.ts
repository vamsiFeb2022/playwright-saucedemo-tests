import { Page, Locator } from '@playwright/test';
import { BasePage } from './basePage';

export class ProductsPage extends BasePage {
  readonly cartIcon: Locator;

  constructor(page: Page) {
    super(page);
    this.cartIcon = page.locator('.shopping_cart_link');
  }

  async addProductToCart(productName: string) {
    const addButton = this.page.locator(
      `[data-test="add-to-cart-${productName}"]`
    );
    await addButton.click();
  }

  async goToCart() {
    await this.cartIcon.click();
  }
}