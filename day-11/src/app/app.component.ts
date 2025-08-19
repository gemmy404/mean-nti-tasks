import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {ProductsListComponent} from "./components/products-list/products-list.component";
import {NavbarComponent} from "./shared/navbar/navbar.component";
import {HomeComponent} from "./components/home/home.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ProductsListComponent, NavbarComponent, HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'day-11';
}
