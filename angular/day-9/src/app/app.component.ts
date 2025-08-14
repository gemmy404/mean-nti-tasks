import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  newProduct = {
    id: 0,
    name: '',
    price: '',
    description: '',
    category: ''
  };

  editMode: boolean = false;

  products: any[] = [];

  searchedProduct: string = "";
  selectedCategory: string | null = "";

  ngOnInit() {
    this.products = JSON.parse(<string>localStorage.getItem("products")) || [];
  }

  getAllProducts() {
    return [...this.products];
  }

  addProduct() {
    this.newProduct.id = this.products.length > 0
      ? this.products[this.products.length - 1].id + 1
      : 1;

    this.products = JSON.parse(<string>localStorage.getItem("products")) || [];

    this.products.push({...this.newProduct});

    localStorage.setItem('products', JSON.stringify(this.products));

    this.newProduct = {id: 0, name: '', price: '', description: '', category: ''};
  }

  deleteProduct(id: number) {
    let indexOfDeletedProduct = this.products.findIndex(product => product.id === id);
    this.products.splice(indexOfDeletedProduct, 1);
    localStorage.setItem('products', JSON.stringify(this.products));
  }

  updateProduct(id: number) {
    this.editMode = true;
    this.newProduct = this.products.find((product) => product.id === id);
  }

  saveUpdatedProduct() {
    let indexOfUpdatedProduct: number = this.products.findIndex((product) => product.id === this.newProduct.id);
    this.products[indexOfUpdatedProduct] = {...this.newProduct};
    localStorage.setItem('products', JSON.stringify(this.products));
    this.editMode = false;
    this.newProduct = {id: 0, name: '', price: '', description: '', category: ''};
  }

  searchProduct() {
    this.products = JSON.parse(<string>localStorage.getItem("products")) || [];
    this.products = this.products.filter((product) => product.name.startsWith(this.searchedProduct));
    this.searchedProduct = "";
    this.selectedCategory = null;
  }

  filterByCategory() {
    this.products = JSON.parse(<string>localStorage.getItem("products")) || [];
    this.products = this.products.filter((product) => product.category === this.selectedCategory);
    this.selectedCategory = "";
    this.searchedProduct = "";
  }

}
