import { Component } from '@angular/core';

@Component({
  selector: 'app-product-card',
  imports: [],
  templateUrl: './product-card.html',
  styleUrl: './product-card.css'
})
export class ProductCard {

  imageUrl = '/assets/img/QkIa5tT.jpeg'
  title = 'Producto ejemplo'
  description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vel sem ornare, fermentum tellus eu, tristique quam.'
  price = '$2500'
}
