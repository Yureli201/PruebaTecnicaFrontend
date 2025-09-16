import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCartShopping, faHeart, faSearch, faUser } from '@fortawesome/free-solid-svg-icons';
import { RouterModule } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-navbar',
  imports: [FontAwesomeModule, RouterModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar {
  cart=faCartShopping
  heart=faHeart
  search=faSearch
  user=faUser

  constructor(private cookieService: CookieService) {}
  
  isLoggedIn(): boolean {
    return !this.cookieService.check('token');
  }
}