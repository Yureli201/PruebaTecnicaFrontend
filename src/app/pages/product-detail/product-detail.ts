import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-product-detail',
  imports: [],
  templateUrl: './product-detail.html',
  styleUrl: './product-detail.css'
})
export class ProductDetail {
  product_id:number|null

  constructor(private route: ActivatedRoute){
    this.product_id = Number(this.route.snapshot.paramMap.get('id'))
  }

}
