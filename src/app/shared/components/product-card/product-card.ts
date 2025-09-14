import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product-card',
  imports: [],
  templateUrl: './product-card.html',
  styleUrl: './product-card.css'
})
export class ProductCard {

  //* Con @Input() el componente recibe datos desde el padre
  @Input() imageUrl = ''
  @Input() title = ''
  @Input() description = ''
  @Input() price = ''

}
