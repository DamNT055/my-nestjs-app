import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductsService {
  private products = [];

  findAll() {
    return this.products;
  }

  create(product: any) {
    this.products.push(product);
    return product;
  }
}
