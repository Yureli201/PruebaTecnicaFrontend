import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot } from '@angular/router';
import { faL } from '@fortawesome/free-solid-svg-icons';
import { CookieService } from 'ngx-cookie-service';
@Injectable({
  providedIn: 'root'
})
export class Auth implements CanActivate {

  constructor(private router: Router, private cookie: CookieService) { }

  canActivate(route: ActivatedRouteSnapshot): boolean {
    const token = this.cookie.get('token')
    const isProtected = route.data['protected'] === true;

    
    if (isProtected) {
      //* Si hay token pasa
      if (token) return true;

      //* Si no hay token redirige al login
      this.router.navigate(['/login']);
      return false;
    }

    //*Si la ruta es para crear token
    else {
      //* Si hay token redirige al home
      if (token) {
        this.router.navigate(['/']);
        return false;
      }
      //*Si no hay token pasa
      return true;
    }
  }

  //TODO: Verificar si el token es valido o no
  
}
