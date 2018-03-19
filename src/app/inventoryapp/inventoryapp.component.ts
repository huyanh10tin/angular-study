import {Component, OnInit, EventEmitter} from '@angular/core';
import {Product} from '../product/product.model';

@Component({
  selector: 'app-inventoryapp',
  templateUrl: './inventoryapp.component.html',
  styleUrls: ['./inventoryapp.component.css']
})
export class InventoryappComponent implements OnInit {
  products: Product[];
  constructor() {
    this.products = [new Product('MYSHOES', 'Black Running Shoes',
      '/assets/images/products/black-shoes.jpg', ['Men', 'Shoes', 'Running Shoes'], 25109.99),
      new Product('NEATOJACKET', 'Blue Jacket',
        '/assets/images/products/blue-jacket.jpg', ['Women', 'Apparel', 'Jackets & Vests'], 31238.99),
      new Product('NICEHAT', 'A Nice Black Hat',
        '/assets/images/products/black-hat.jpg', ['Men', 'Accessories', 'Hats'], 3729.99)];
  }

  ngOnInit() {
    console.log(this);
  }

  productWasSelected(product: Product): void {
    console.log('Product clicked: ', product);
  }
}
