import { Component } from '@angular/core';
import { ProductCard } from '../../shared/components/product-card/product-card';
import { Api } from '../../core/services/api';

@Component({
  selector: 'app-home',
  imports: [ ProductCard],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  description = "hola"

  ngOnInit(): void {
    this.getProducts()
  }

  getProducts(){

    }

}
