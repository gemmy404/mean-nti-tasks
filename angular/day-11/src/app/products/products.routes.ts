import {Routes} from '@angular/router';
import {ProductsListComponent} from "../components/products-list/products-list.component";
import {ProductsDetailsComponent} from "../components/products-details/products-details.component";

export const PRODUCTS_ROUTES: Routes = [
  {path: '', redirectTo: 'list', pathMatch: 'full'},
  { path: 'list', component: ProductsListComponent },
  { path: 'details/:id', component: ProductsDetailsComponent }
];
