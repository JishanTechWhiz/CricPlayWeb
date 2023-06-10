import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OrganizerService } from '../organizer.service';
import { AlertController, LoadingController, NavController, ToastController,MenuController } from '@ionic/angular';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-organizer-page',
  templateUrl: './organizer-page.page.html',
  styleUrls: ['./organizer-page.page.scss'],
})
export class OrganizerPagePage implements OnInit {

  showPassword=false;
  showPassword2=false;
  passwordToggleIcon = "ri-eye-line";

  passwordToggleIcon2 = "ri-eye-line";


  togglePassword(): void{
    this.showPassword = !this.showPassword;

    if(this.passwordToggleIcon=="ri-eye-line"){
      this.passwordToggleIcon="ri-eye-off-line";
    }else{
      this.passwordToggleIcon="ri-eye-line";
    }
 }

 togglePassword2(): void{
  this.showPassword2 = !this.showPassword2;

  if(this.passwordToggleIcon2=="ri-eye-line"){
    this.passwordToggleIcon2="ri-eye-off-line";
  }else{
    this.passwordToggleIcon2="ri-eye-line";
  }
}

  constructor(
    private service: OrganizerService,
    private alertCtrl: AlertController,
    private toastCtrl: ToastController,
    private loadingCtrl: LoadingController,
    private router: Router,

    private navCtrl: NavController,
    private toastCrtl: ToastController,
    // private router: Router,
    private http: HttpClient,
    private storage: Storage,
    private menuCtrl: MenuController
  ) { }

  form = new FormGroup({
    Fullname: new FormControl('', [Validators.required, Validators.maxLength(25),]),
    Phone: new FormControl('', [Validators.required, Validators.maxLength(11),]),
    Email: new FormControl('', [Validators.required, Validators.maxLength(50),]),
    Password: new FormControl('', [Validators.required, Validators.maxLength(10),]),
    ConfirmPassword: new FormControl('', [Validators.required, Validators.maxLength(10),]),
  });

  forms = new FormGroup({
    Email: new FormControl('', [Validators.required, Validators.maxLength(50),]),
    Password: new FormControl('', [Validators.required, Validators.maxLength(10),]),
  });

  /******Login********/
  async login(forms: FormGroup) {
    const headers = {
      enctype: 'multipart/form-data;',
      'Content-Type': 'application/json',
      Accept: 'plain/text',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT',
      'Access-Control-Allow-Headers': 'Authorization, Origin, Content-Type, X-CSRF-Token',
    };
    if (forms.value.Email === '' || forms.value.Password === '') {
      const toast = await this.toastCrtl.create({
        message: 'Please fill all details!',
        duration: 1500,
        icon: 'checkmark-circle-outline'
      });

      await toast.present();
    }
    else {
      const formData = new FormData();

      const formDataJsonString = JSON.stringify(formData);
      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          Accept: 'application/json',
        }),
        body: formDataJsonString,
      };
      const dataJson = {
        Email: forms.value.Email,
        Password: forms.value.Password,
      };

      this.service.login(dataJson).subscribe(async res => {
        console.log(res);
        this.storage.set('organizer', JSON.stringify(res));
        this.router.navigateByUrl('/organizer-dash');
        const toast = await this.toastCrtl.create({
          message: 'SuccessFully Login!',
          duration: 1500,
          icon: 'checkmark-circle-outline'
        });
        forms.reset();
        await toast.present();
      }, async err => {
        const toast = await this.toastCrtl.create({
          message: err.error.error,
          duration: 1500,
          icon: 'alert'
        });
        await toast.present();
      });
      console.log('dataJson:', dataJson);

    }
  }

  /********Signup************/

  async onSubmit(form: FormGroup) {
    const headers = {
      'enctype': 'multipart/form-data;',
      'Content-Type': 'application/json',
      'Accept': 'plain/text',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT',
      'Access-Control-Allow-Headers': 'Authorization, Origin, Content-Type, X-CSRF-Token',
    };

    if (form.value.Fullname == '' && form.value.Phone == '' && form.value.Email == '' && form.value.Password == '' && form.value.ConfirmPassword == '') {
      const toast = await this.toastCtrl.create({
        message: 'Please fill all details!',
        duration: 1500,
        icon: 'checkmark-circle-outline'
      });

      await toast.present();
    }
    else {
      const formData = new FormData();
      const formDataJsonString = JSON.stringify(formData);
      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        }),
        body: formDataJsonString,
      };
      const dataJson = {
        Fullname: form.value.Fullname,
        Phone: form.value.Phone,
        Email: form.value.Email,
        Password: form.value.Password,
        ConfirmPassword: form.value.ConfirmPassword
      };

      this.service.create(dataJson).subscribe(async res => {
        console.log(res);
        this.router.navigateByUrl('/home');
        const toast = await this.toastCtrl.create({
          message: 'SuccessFully Register!',
          duration: 1500,
          icon: 'checkmark-circle-outline'
        });
        form.reset();
        await toast.present();
      }, async err => {
        const toast = await this.toastCtrl.create({
          message: err.error.error,
          duration: 1500,
          icon: 'alert'
        });

        await toast.present();
      });

      console.log('dataJson:', dataJson);
    }
  }

  ngOnInit() {
    this.storage.create();
  }


}
