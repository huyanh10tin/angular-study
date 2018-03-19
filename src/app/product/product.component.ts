import {Component, OnInit, EventEmitter, Input, Output} from '@angular/core';
import {Product} from './product.model';
import {pipeDef} from '@angular/core/src/view';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @Output('onProductSelected') onProductSelected: EventEmitter<Product>;
  @Input('productList') productList: Product[];
  private currenProduct: Product;

  constructor() {
    this.onProductSelected = new EventEmitter<Product>();
  }

  ngOnInit() {
  }

  clicked(product: Product): void {
    this.currenProduct = product;
    this.onProductSelected.emit(product);
  }

  isSelected(product: Product): boolean {
    if (!product || !this.currenProduct) {
      return false;
    }
    return product.sku === this.currenProduct.sku;
  }
}
