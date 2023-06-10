import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';
import { OrganizerService } from '../organizer.service';
import { Storage } from '@ionic/storage-angular';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-organizer-dash',
  templateUrl: './organizer-dash.page.html',
  styleUrls: ['./organizer-dash.page.scss'],
})
export class OrganizerDashPage implements OnInit {

  constructor(
    private service2: OrganizerService,
    private storage: Storage,
    private router2: ActivatedRoute,
    private navRouter: Router,

    private alertController: AlertController,
    private toastController: ToastController,
    private router: Router) { }

  handlerMessage = '';
  roleMessage = '';

  ngOnInit() {
    this.storage.create();

    this.storage.get('organizer').then((data) => {

      this.getUser(JSON.parse(data));
     });
  }

  form: any = new FormGroup({
    Fullname: new FormControl('', [Validators.required, Validators.maxLength(25),]),
    Phone: new FormControl('', [Validators.required, Validators.maxLength(25),]),
    Email: new FormControl('', [Validators.required, Validators.maxLength(11),]),
    Gender: new FormControl('', [Validators.required, Validators.maxLength(10),]),
    DOB: new FormControl('', [Validators.required, Validators.maxLength(10),]),
  });
  currentUser: any;

  getUser(user: any){
    // console.log(user);

    this.service2.check(user._id).subscribe(res =>{
      // console.log(res);
      this.currentUser = res;
      console.log(this.currentUser)
      this.form.patchValue({
        Fullname: this.currentUser.Fullname,
        Phone: this.currentUser.Phone,
        Email: this.currentUser.Email,
        
      })
    },err=>{
      console.log(err);
    })

  }

  /*******/

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Are You Sure Logout!',
      buttons: [
        {
          text: 'No',
          role: 'cancel',
          handler: () => {
            this.handlerMessage = 'Alert canceled';
          },
        },
        {
          text: 'Yes',
          role: 'confirm',
          handler: async () => {
            this.handlerMessage = 'Alert confirmed';
            this.router.navigateByUrl('/home');
            const toast = await this.toastController.create({
              message: 'SuccessFully Logout!',
              duration: 1500,
              icon: 'checkmark-circle-outline'
            });

            await toast.present();
          },
        },
      ],
    });
    await alert.present();

    const { role } = await alert.onDidDismiss();
    this.roleMessage = `Dismissed with role: ${role}`;
  }

}
