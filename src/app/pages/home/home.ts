import { Component } from '@angular/core';
import { ProductCard } from '../../shared/components/product-card/product-card';
import { Api } from '../../core/services/api';
import { Product, Category } from '../../shared/models/product';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [ ProductCard, RouterModule],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  //* Array de productos y categorías
  products: Product[] = []
  categories: Category[] = []

  constructor(private api:Api){}

  //* estas funciones se ejecutaran al iniciar el componente
  ngOnInit(): void {
    this.getProducts()
    this.getCategories()
  }

  //* Función para obtener los productos, máximo 3
  getProducts(){
    this.api.getProducts(0, 3).subscribe({
      next: (data:Product[])=>{
        this.products = data
      },
      error: (error)=>{
        console.error(error)
      }
    })
    }

    //* Función para obtener las categorías existentes en la BD
    getCategories(){
      this.api.getCategories().subscribe({
        next:(data:Category[])=>{
          this.categories = data
        },
        error:(error)=>{
          console.error(error)
        }
      })
    }
}
