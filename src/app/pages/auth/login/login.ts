import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Api } from '../../../core/services/api';
import { UserCredentials } from '../../../shared/models/user';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-login',
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
  credentials:UserCredentials = {
    email: '',
    password: ''
  }
  
  error:boolean = false
  success:boolean = false

  constructor(private api: Api, private cookie: CookieService,private router: Router) {}


  login(credentials:UserCredentials){
    this.api.login(credentials).subscribe({
      next: (data:any)=>{
        this.success = true
        this.cookie.set('token', data.access_token)
        setTimeout(() => { 
          this.success = false
          this.router.navigate(['/'])
        }, 1500)
      },
      error: (error)=>{
        this.error = true
        setTimeout(() => { this.error = false }, 1000)
      }
    })
  }
}
