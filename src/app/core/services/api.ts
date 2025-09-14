import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User, NewUser ,UserCredentials } from '../../shared/models/user';
import { Product, Category } from '../../shared/models/product'

@Injectable({
  providedIn: 'root'
})
export class Api {

  URL_USER = 'https://api.escuelajs.co/api/v1/users/';
  URL_AUTH = 'https://api.escuelajs.co/api/v1/auth';
  URL_PRODUCTS = 'https://api.escuelajs.co/api/v1/products'
  URL_CATEGORIES = 'https://api.escuelajs.co/api/v1/categories'

  constructor(private http: HttpClient){}

  //* Auth
  login(credentials: UserCredentials){
    return this.http.post(`${this.URL_AUTH}/login`, credentials)
  }
  //* Registro de nuevo usuario
  register(newUser:NewUser){
    return this.http.post(`${this.URL_USER}`, newUser)
  }
  //* Revisar si el email ya esta en uso
  //! Pero no sirve el endpoint de la API
  checkEmail(email:any){
    return this.http.post(`${this.URL_USER}is-available`, email)
  }

  //* Productos

  //* Obtener solo n productos
  getProducts(offset:number, limit:number){
    return this.http.get<Product[]>(`${this.URL_PRODUCTS}?offset=${offset}&limit=${limit}`)
  }

  //* Categorías

  //*Obtener categorías
  getCategories(){
    return this.http.get<Category[]>(`${this.URL_CATEGORIES}`)
  }
}
