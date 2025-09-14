import { Component } from '@angular/core';
import { ProductCard } from '../../shared/components/product-card/product-card';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-search',
  imports: [ProductCard, FontAwesomeModule],
  templateUrl: './search.html',
  styleUrl: './search.css'
})
export class Search {
    search = faSearch;
}
