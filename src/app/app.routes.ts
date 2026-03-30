import { Routes } from '@angular/router';
import { Product } from './pages/product/product';
import { ProductAdd } from './pages/product-add/product-add';
export const routes: Routes = [
    {
        path:'product',
        component:Product
    },
    {
        path:'product-add',
        component:ProductAdd
    }
];

