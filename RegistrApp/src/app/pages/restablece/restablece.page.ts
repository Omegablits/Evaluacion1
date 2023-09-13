import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-restablece',
  templateUrl: './restablece.page.html',
  styleUrls: ['./restablece.page.scss'],
})
export class RestablecePage implements OnInit {

  usuario:string='';
  password:string='';

  constructor(private router: Router, private toastCtrl:ToastController) { }

  ngOnInit() {
  }

  async irMenu(){
    if (this.usuario=="admin") {
        this.router.navigate(['/login']);
    }else{
        let m = this.toastCtrl.create({
          message:"Este usuario no se encuentra registrado",
          duration:3000,
          position:'middle'
        });
         (await m).present();
    }

  }

}

