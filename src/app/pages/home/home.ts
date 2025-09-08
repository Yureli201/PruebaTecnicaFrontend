import { Component } from '@angular/core';
import { Navbar } from '../../shared/components/navbar/navbar';
import { ProductCard } from '../../shared/components/product-card/product-card';

@Component({
  selector: 'app-home',
  imports: [Navbar, ProductCard],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

}
