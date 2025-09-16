import { Component } from '@angular/core';
import { CartProduct } from '../../shared/models/product';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cart',
  imports: [FormsModule],
  templateUrl: './cart.html',
  styleUrl: './cart.css'
})
export class Cart {
  cartProducts: CartProduct[] = [];
  subtotal: number = 0;
  shipping: number = 0;
  total: number = 0;

  ngOnInit(): void {
    this.getCart()
  }

  getCart(){
    this.cartProducts = JSON.parse(localStorage.getItem('cart') || '[]')
    this.calculateTotal()
  }

  removeProduct(productId: number){
    this.cartProducts = this.cartProducts.filter((item:CartProduct)=>item.productId !== productId)
    localStorage.setItem('cart', JSON.stringify(this.cartProducts))
    this.getCart()
  }

  changeQuantity(productId: number, quantity: number){
    this.cartProducts = this.cartProducts.map((item:CartProduct)=>item.productId === productId ? {...item, quantity: quantity, total: item.price * quantity} : item)
    localStorage.setItem('cart', JSON.stringify(this.cartProducts))
    this.getCart()
  }

  calculateTotal(){
    this.subtotal = this.cartProducts.reduce((total, item) => total + item.total, 0)
    this.shipping = 0
    this.total = this.subtotal + this.shipping
  }
}
