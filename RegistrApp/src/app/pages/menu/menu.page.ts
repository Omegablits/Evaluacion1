import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  
  cerrarSesion(){
    this.router.navigate(['/login']);
  }
  mostrarAyuda(){
    this.router.navigate(['/login']);
  }

  ir1(){
    this.router.navigate(['/registrar-a']);
  }
  ir2(){
    this.router.navigate(['/asistencia']);
  }
  ir3(){
    this.router.navigate(['/arasistencia']);
  }
  ir4(){
    this.router.navigate(['/restablece']);
  }
}
