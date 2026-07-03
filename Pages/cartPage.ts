import { Page, Locator } from '@playwright/test';
import { BasePage } from './basePage';

export class CartPage extends BasePage {
  readonly cartItems: Locator;

  constructor(page: Page) {
    super(page);
    this.cartItems = page.locator('.cart_item');
  }

  async getItemCount(): Promise<number> {
    return await this.cartItems.count();
  }
}