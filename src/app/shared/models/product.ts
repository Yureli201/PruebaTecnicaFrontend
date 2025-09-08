export interface Product {
  id: number
  title: string
  slug: string
  price: number
  description: string
  category: Category
  images: string[]
}

export interface Category {
  id: number
  name: string
  slug: string
  image: string
}

export interface NewProduct {
  title: string
  price: number
  description: string
  categoryId: number
  images: string[]
}
