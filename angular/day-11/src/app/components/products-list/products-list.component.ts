import {Component, OnInit} from '@angular/core';
import {CommonModule} from "@angular/common";
import {ProductsService} from "../../features/services/products.service";
import {IProduct} from "../../cores/interface/IProduct";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-products-list',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './products-list.component.html',
  styleUrl: './products-list.component.scss'
})
export class ProductsListComponent implements OnInit {

  products: IProduct[] = [];

  constructor(private productsService: ProductsService) {

  }

  ngOnInit() {
    this.getAllProducts();
  }

  getAllProducts() {
    this.productsService.getAllProducts().subscribe(
      {
        next: (data) => {
          console.log(data);
          this.products = data || [];
        },
        error: (err) => {
          console.log(err);
        },
        complete: () => {

        }
      }
    );
  }

}
