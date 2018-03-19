import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import { ArticleComponent } from './article/article.component';
import { RedditComponent } from './reddit/reddit.component';
import { ProductComponent } from './product/product.component';
import { InventoryappComponent } from './inventoryapp/inventoryapp.component';
import { ProductRowComponent } from './product-row/product-row.component';
import { ProductImageComponent } from './product-image/product-image.component';
import { ProductDepartmentComponent } from './product-department/product-department.component';
import { PriceDisplayComponent } from './price-display/price-display.component';


@NgModule({
  declarations: [
    AppComponent,
    ArticleComponent,
    RedditComponent,
    InventoryappComponent,
    ProductComponent,
    ProductRowComponent,
    ProductImageComponent,
    ProductDepartmentComponent,
    PriceDisplayComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
