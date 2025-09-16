import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-card',
  imports: [],
  templateUrl: './product-card.html',
  styleUrl: './product-card.css'
})
export class ProductCard {

  //* Con @Input() el componente recibe datos desde el padre
  @Input() id_product = 0
  @Input() imageUrl = ''
  @Input() title = ''
  @Input() description = ''
  @Input() price = 0

  constructor(private router: Router) {}

  goToProduct(){
    this.router.navigate(['/product/'+this.id_product])
  }
}
