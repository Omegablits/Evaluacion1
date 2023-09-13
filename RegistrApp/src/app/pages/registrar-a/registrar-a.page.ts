import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-registrar-a',
  templateUrl: './registrar-a.page.html',
  styleUrls: ['./registrar-a.page.scss'],
})
export class RegistrarAPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  cerrarSesion(){
    this.router.navigate(['/login']);
  }
  mostrarAyuda(){
    this.router.navigate(['/login']);
  }


}
