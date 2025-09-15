import { Routes } from '@angular/router';
import { Login } from './pages/auth/login/login';
import { Register } from './pages/auth/register/register';
import { Home } from './pages/home/home';
import { Search } from './pages/search/search';
import { ProductDetail } from './pages/product-detail/product-detail';
import { Cart } from './pages/cart/cart';
import { Profile } from './pages/profile/profile';


export const routes: Routes = [
    { path: '', component : Home },
    { path: 'login', component:Login },
    { path: 'register', component: Register },
    { path: 'search', component: Search },
    { path: 'search/:idCategory', component: Search },
    { path: 'product/:id', component: ProductDetail },
    { path: 'cart', component: Cart },
    { path: 'profile', component: Profile }
];