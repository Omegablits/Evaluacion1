import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  usuario:string='';
  password:string='';

  constructor(private router: Router, private toastCtrl:ToastController) { }

  ngOnInit() {
  }

  async irMenu(){
    if (this.usuario=="admin" && this.password=="123") {
        this.router.navigate(['/menu']);
    }else{
        let m = this.toastCtrl.create({
          message:"usuario y password incorrecta",
          duration:2500,
          position:'middle'
        });
         (await m).present();
    }

    
  }

  irRecupera(){
    this.router.navigate(['/recupera']);
  }

}