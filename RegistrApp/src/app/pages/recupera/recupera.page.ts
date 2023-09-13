import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-recupera',
  templateUrl: './recupera.page.html',
  styleUrls: ['./recupera.page.scss'],
})
export class RecuperaPage implements OnInit {

  correo:string='';

  public alertButtons = ['OK'];

  constructor(private router: Router, private toastCtrl:ToastController) { }

  ngOnInit() {
  }

  async irRestablece(){
    if (this.correo=="admin") {
        this.router.navigate(['/restablece']);
    }

  }

}
