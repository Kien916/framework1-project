import { Routes } from '@angular/router';
import { Product } from './pages/product/product';
import { ProductAdd } from './pages/product-add/product-add';
import { ProductEdit } from './pages/product-edit/product-edit';
import { Task } from './ASM1/task/task';
import { TaskAdd } from './ASM1/task-add/task-add';
import { Register } from './pages/register/register';
import { Login } from './pages/login/login';
import { authGuard } from './guards/auth-guards';
export const routes: Routes = [
    {
        path:'product',
        component: Product,
        canActivate: [authGuard]
    },
    {
        path:'product-add',
        component:ProductAdd,
        canActivate: [authGuard]
    },
    {
        path:'product-edit/:id',
        component:ProductEdit,
        canActivate: [authGuard]
    },
    {
        path:'task',
        component:Task,
        canActivate: [authGuard]
    },
    {
        path:"task/add",
        component:TaskAdd,
        canActivate: [authGuard]
    },
    {
        path:"register",
        component:Register
    },
    {
        path:"login",
        component:Login
    }
   
];

