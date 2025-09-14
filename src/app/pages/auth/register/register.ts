import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Api } from '../../../core/services/api';
import { NewUser } from '../../../shared/models/user';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { log } from 'console';

@Component({
  selector: 'app-register',
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './register.html',
  styleUrl: './register.css'
})
export class Register {
  //*Variables para la creación de nuevo usuario
  newUser:NewUser = {
      name: '',
      email: '',
      password: '',
      avatar: 'https://imgur.com/a/L7bgqsy'
  }

  //* variables para la validación de contraseña
  password = ''
  conf_password = ''

  //* variables para la validación de errores
  error = false
  success = false
  emailError = false

  constructor(private api: Api,private router: Router) {}

  //* Función para registrar un nuevo usuario
  register(newUser:NewUser){
    //* validar que las contraseñas coincidan
    if(this.password == this.conf_password){
      newUser.password = this.password
      //* enviar el nuevo usuario a la API
      this.api.register(newUser).subscribe({
        next: (data:any)=>{
          // * mostrar mensaje de éxito y redirigir al login después de 1.5 seg
          this.success = true 
          setTimeout(() => { 
            this.success = false
            this.router.navigate(['/login'])
          }, 1500)

        },
        error: (error)=>{
          //* mostrar mensaje de error
          this.error = true
          setTimeout(()=>{this.error = false},1000)
        }
      })
    }
    //* si las contraseñas no coinciden
    else{
      this.error = true
      setTimeout(()=>{this.error = false},1000)
    }
  }

  /*
  !función para verificar si el email ya esta en uso, sin embargo por un error de la API
  !no se puede verificar esto pues siempre manda un mensaje de email usado

  checkEmail(){
   let checkEmail = {email: this.newUser.email}
    console.log(checkEmail)
    this.api.checkEmail(checkEmail).subscribe({
      next: (data:any)=>{
        if(!data.isAvailable){
          this.emailError = true
        }else{
          this.emailError = false
        }
      },
      error: (error)=>{
        this.error = true
      }
    })
  }*/

}
