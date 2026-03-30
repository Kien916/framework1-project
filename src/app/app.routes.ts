import { Routes } from '@angular/router';
import { Product } from './pages/product/product';
import { ProductAdd } from './pages/product-add/product-add';
import { Task } from './ASM1/task/task';
import { TaskAdd } from './ASM1/task-add/task-add';
export const routes: Routes = [
    {
        path:'product',
        component:Product
    },
    {
        path:'product-add',
        component:ProductAdd
    },
    {
        path:'task',
        component:Task
    },
    {
        path:"task/add",
        component:TaskAdd
    }
];

