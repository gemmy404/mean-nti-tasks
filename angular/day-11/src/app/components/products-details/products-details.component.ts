import {Component, OnInit} from '@angular/core';
import {NgForOf} from "@angular/common";
import {ProductsService} from "../../features/services/products.service";
import {IProduct} from '../../cores/interface/IProduct';
import {ActivatedRoute, RouterLink} from "@angular/router";
import {routes} from "../../app.routes";

@Component({
  selector: 'app-products-details',
  standalone: true,
  imports: [
    NgForOf,
    RouterLink
  ],
  templateUrl: './products-details.component.html',
  styleUrl: './products-details.component.scss'
})
export class ProductsDetailsComponent implements OnInit {

  product: IProduct = {
    id: 0,
    title: '',
    price: 0,
    description: '',
    category: '',
    image: ''
  };

  constructor(private productsService: ProductsService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.getProductById(id);
  }

  getProductById(id: number) {
    this.productsService.getProductById(id).subscribe({
      next: (data) => {
        this.product = data;
      },
      error: err => {
        console.log(err);
      },
      complete: () => {

      }
    })
  }

}
