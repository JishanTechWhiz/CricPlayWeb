import { Component, OnInit } from '@angular/core';
import { TournamentService } from '../../tournament.service';

import { ActivatedRoute,Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';
import { OrganizerService } from '../../organizer.service';
import { Storage } from '@ionic/storage-angular';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-view-tournament',
  templateUrl: './view-tournament.page.html',
  styleUrls: ['./view-tournament.page.scss'],
})
export class ViewTournamentPage implements OnInit {

  datauser :any;
  handlerMessage = '';
  roleMessage = '';
  constructor(
    private service:TournamentService,
    private service2: OrganizerService,
    private storage: Storage,
    private router2: ActivatedRoute,
    private navRouter: Router,
    private alerts:AlertController,
    private toasts:ToastController
    ) { }

  ngOnInit() {
    this.storage.create();

    this.storage.get('organizer').then((data) => {

      this.getUser(JSON.parse(data));
     });
    this.displayData();
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

  displayData(){
    this.service.display().subscribe((data)=>{
      this.datauser=data;
    });
  }

  async deleteCargo(id:string) {
    const alert = await this.alerts.create({
      header: 'Delete!!',
      subHeader: 'Are You Sure to Delete this Record!',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            this.handlerMessage = 'Alert canceled';
          },
        },
        {
          text: 'OK',
          role: 'confirm',
          handler: () => {
            this.handlerMessage = 'Alert confirmed';
            this.service.deletes(id).subscribe(async ()=>{
                console.log('SuccessFully Deleted');
                const toast = await this.toasts.create({
                  message: 'SuccessFully Deleted!',
                  duration: 1500,
                  icon: 'globe'
                });

                this.ngOnInit();

                await toast.present();
            });
          },
        },
      ],
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    this.roleMessage = `Dismissed with role: ${role}`;
  }

}
