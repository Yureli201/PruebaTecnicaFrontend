import { Component } from '@angular/core';
import { ProductCard } from '../../shared/components/product-card/product-card';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { Api } from '../../core/services/api'
import { Product,Category, FilterProducts } from '../../shared/models/product';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search',
  imports: [ProductCard, FontAwesomeModule, FormsModule],
  templateUrl: './search.html',
  styleUrl: './search.css'
})
export class Search {
  search = faSearch
  //*Variables para listar las categorias y los parametros de los filtros
  categories:Category[] = []
  filters:FilterProducts = {
    name: '',
    minPrice: 1,
    maxPrice: 0,
    category: 0
  }
  products:Product[] = []
  
  //*Variables para la paginacion de los productos
  paginatedProducts:Product[] = []
  currentPage: number = 1
  itemsPerPage: number = 9
  totalPages: number = 0
  canGoNext: boolean = false
  canGoPrevious: boolean = false

  constructor(private api:Api, private route:ActivatedRoute){}
  
  //*Al iniciar se buscan las categorías y los productos en general o de una categoría si esta en los parámetros
  ngOnInit():void {
    this.getCategories()

    this.route.params.subscribe((params) => {
      this.filters.category = Number(params['idCategory'])
    })

    this.getProducts()
  }

  //*Función para obtener las categorías
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

  //*Función para obtener los productos dependiendo de los filtros
  getProducts(){
    this.api.filterProducts(this.filters).subscribe({
      next:(data:Product[])=>{
        this.products = data
        this.updatePagination()
      },
      error:(error)=>{
        console.error(error)
      }
    })
  }

  //*Función para actualizar la paginacion
  updatePagination(): void {
    this.totalPages = Math.ceil(this.products.length / this.itemsPerPage)
    this.canGoNext = this.currentPage < this.totalPages
    this.canGoPrevious = this.currentPage > 1
    
    const startIndex = (this.currentPage - 1) * this.itemsPerPage
    const endIndex = startIndex + this.itemsPerPage
    this.paginatedProducts = this.products.slice(startIndex, endIndex)
    this.upWindow()
  }

  //*Función para ir a la siguiente página
  nextPage(): void {
    if (this.canGoNext) {
      this.currentPage++
      this.updatePagination()
    }
  }

  //*Función para ir a la página anterior
  previousPage(): void {
    if (this.canGoPrevious) {
      this.currentPage--
      this.updatePagination()
    }
  }

  //*Función para limpiar los filtros
  cleanFilters(){
    this.filters= {
      name: '',
      minPrice: 1,
      maxPrice: 0,
      category: 0
    }
    this.currentPage = 1
    this.getProducts()
  }

  //*Función para subir la ventana al inicio cada que se cambia de pagina de productos
  upWindow(){
    window.scrollTo(0,0)
  }
}
