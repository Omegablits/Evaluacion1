import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-arasistencia',
  templateUrl: './arasistencia.page.html',
  styleUrls: ['./arasistencia.page.scss'],
})
export class ARasistenciaPage implements OnInit {

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
