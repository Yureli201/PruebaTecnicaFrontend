import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductCard } from '../../shared/components/product-card/product-card';
import { Api } from '../../core/services/api';
import { Product, CartProduct } from '../../shared/models/product';

@Component({
  selector: 'app-product-detail',
  imports: [ProductCard],
  templateUrl: './product-detail.html',
  styleUrl: './product-detail.css'
})
export class ProductDetail {
  product_id:number|null = null
  product:Product = {} as Product
  products:Product[] = []
  cart:CartProduct[] = []

  quantity:number = 1

  constructor(private route: ActivatedRoute, private api: Api, private router: Router){
  }

  ngOnInit():void {
    this.route.params.subscribe((params) => {
      this.product_id = Number(params['id'])
      this.product = {} as Product
      this.getProduct()
    })
  }

  getProduct():void {
    this.api.getProduct(this.product_id!).subscribe({
      next: (data:Product)=>{
        this.product = data
        this.getRelatedProducts()
      },
      error: (error)=>{
        console.error(error)
        this.router.navigate(['/'])
      }
    })
  }

  getRelatedProducts(){
    this.api.getRelatedProducts(this.product.category.id, 0, 3).subscribe({
      next: (data:Product[])=>{
        this.products = data
      },
      error: (error)=>{
        console.error(error)
      }
    })
  }

  windowRefresh(){
    window.location.reload()
  }

  changeQuantity(quantity:number){
    this.quantity = this.quantity + quantity
    if(this.quantity < 1){
      this.quantity = 1
    }
  }

  addToCart(){
    this.cart = JSON.parse(localStorage.getItem('cart') || '[]')

    if(this.cart.find((item:CartProduct)=>item.productId === this.product.id)){
      this.cart.find((item:CartProduct)=>item.productId === this.product.id)!.quantity += this.quantity
      this.cart.find((item:CartProduct)=>item.productId === this.product.id)!.total += this.product.price * this.quantity
    }else{
      this.cart.push({
        productId: this.product.id,
        image: this.product.images[0],
        title: this.product.title,
        price: this.product.price,
        quantity: this.quantity,
        total: this.product.price * this.quantity
      })
    }

    localStorage.setItem('cart', JSON.stringify(this.cart))
  }
}
