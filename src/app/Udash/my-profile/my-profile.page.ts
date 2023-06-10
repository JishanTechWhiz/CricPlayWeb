import { Component, OnInit } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AlertController, LoadingController, ToastController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../user.service';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.page.html',
  styleUrls: ['./my-profile.page.scss'],
})
export class MyProfilePage implements OnInit {

  constructor(
    private service: UserService,
    private alertCtrl: AlertController,
    private toastCtrl: ToastController,
    private loadingCtrl: LoadingController,
    private router: ActivatedRoute,
    private navRouter: Router,
    private storage: Storage
  ) { }

  form: any = new FormGroup({
    Fullname: new FormControl('', [Validators.required, Validators.maxLength(25),]),
    Phone: new FormControl('', [Validators.required, Validators.maxLength(25),]),
    Email: new FormControl('', [Validators.required, Validators.maxLength(11),]),
    Gender: new FormControl('', [Validators.required, Validators.maxLength(10),]),
    DOB: new FormControl('', [Validators.required, Validators.maxLength(10),]),
  });
  currentUser: any;

  ngOnInit() {
    this.storage.create();

    this.storage.get('user').then((data) => {

      this.getUser(JSON.parse(data));
     });
  }

  getUser(user: any){
    // console.log(user);

    this.service.check(user._id).subscribe(res =>{
      // console.log(res);
      this.currentUser = res;
      console.log(this.currentUser)
      this.form.patchValue({
        Fullname: this.currentUser.Fullname,
        Phone: this.currentUser.Phone,
        Email: this.currentUser.Email,
        Gender: this.currentUser.Gender,
        DOB: (new Date()).toISOString().substring(0,10) ,
        
      })
    },err=>{
      console.log(err);
    })

  }

  onSubmit(form: FormGroup) {
    const headers = {
      'enctype': 'multipart/form-data;',
      'Content-Type': 'application/json',
      'Accept': 'plain/text',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT',
      'Access-Control-Allow-Headers': 'Authorization, Origin, Content-Type, X-CSRF-Token',
    };
    const formData = new FormData();
    let formDataJsonString = JSON.stringify(formData);
    let httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        "Accept": "application/json",
      }),
      body: formDataJsonString,
    };
    const dataJson = {
      Fullname: form.value.Fullname,
      Phone: form.value.Phone,
      Email: form.value.Email,
      Gender: form.value.Gender,
      DOB: form.value.DOB,

    };
console.log(dataJson);

    this.service.updates(dataJson).subscribe(async res => {
      console.log(res);
      this.storage.set('user', JSON.stringify(res));
      this.navRouter.navigate(['/user-dash']);
      const toast = await this.toastCtrl.create({
        message: 'User update Succesfully!',
        duration: 1500,
        icon: 'checkmark-circle-outline'
      });

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
