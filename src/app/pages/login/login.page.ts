import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
import { SupabaseService } from 'src/app/services/supabase.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})


export class LoginPage implements OnInit {
  credenciales?: FormGroup;

  constructor(
    private supabaseService: SupabaseService,
    private router: Router,
    private fb: FormBuilder,
    private alertController: AlertController,
    private loadingController: LoadingController,
  ) { }

  async loginGoogle(){
    const { data, error } = await this.supabaseService.supabase.auth.signInWithOAuth({
        provider: 'google',
      })
    }
    
  ngOnInit() {
    this.credenciales = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  async login() {
    const loading = await this.loadingController.create();
    await loading.present();

    this.supabaseService.ingresarUsuario(this.credenciales?.value)
      .then(async data => {
        await loading.dismiss();

        this.router.navigateByUrl('/user', { replaceUrl: true });
      }, async err => {
        await loading.dismiss();
        this.showError('Carga Fallida', err.message);
      });
  }

  registrarUsuario() {
    this.router.navigateByUrl('/register', { replaceUrl: true })
  }
  goChat() {
    this.router.navigateByUrl('/chat', { replaceUrl: true })
  }
  goUser() {
    this.router.navigateByUrl('/user', { replaceUrl: true })
  }

  async showError(tittle:any , msg: any) {
    const alert = await this.alertController.create({
      header: tittle,
      message: msg,
      buttons: ['OK'],
    })
    await alert.present();
  }

  get email() {
    return this.credenciales?.value.get('email');
  }

  get password() {
    return this.credenciales?.value.get('passoword');
  }
  
}


