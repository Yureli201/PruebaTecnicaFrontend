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
  categories:Category[] = []
  filters:FilterProducts = {
    name: '',
    minPrice: 1,
    maxPrice: 0,
    category: 0
  }
  products:Product[] = []
  paginatedProducts:Product[] = []
  currentPage: number = 1
  itemsPerPage: number = 9
  totalPages: number = 0
  canGoNext: boolean = false
  canGoPrevious: boolean = false

  constructor(private api:Api, private route:ActivatedRoute){}
  
  ngOnInit():void {
    this.getCategories()

    this.route.params.subscribe((params) => {
      this.filters.category = Number(params['idCategory'])
      console.log(this.filters.category)
    })

    this.getProducts()
  }

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

  updatePagination(): void {
    this.totalPages = Math.ceil(this.products.length / this.itemsPerPage)
    this.canGoNext = this.currentPage < this.totalPages
    this.canGoPrevious = this.currentPage > 1
    
    const startIndex = (this.currentPage - 1) * this.itemsPerPage
    const endIndex = startIndex + this.itemsPerPage
    this.paginatedProducts = this.products.slice(startIndex, endIndex)
    this.upWindow()
  }

  nextPage(): void {
    if (this.canGoNext) {
      this.currentPage++
      this.updatePagination()
    }
  }

  previousPage(): void {
    if (this.canGoPrevious) {
      this.currentPage--
      this.updatePagination()
    }
  }

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

  upWindow(){
    window.scrollTo(0,0)
  }
}
