import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { TournamentService } from '../../tournament.service';
import { AlertController, LoadingController, NavController, ToastController,MenuController } from '@ionic/angular';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { OrganizerService } from '../../organizer.service';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-add-tournament',
  templateUrl: './add-tournament.page.html',
  styleUrls: ['./add-tournament.page.scss'],
})
export class AddTournamentPage implements OnInit {

  constructor(
    private service2: OrganizerService,
    private storage: Storage,
    private router2: ActivatedRoute,
    private navRouter: Router, 

    private service: TournamentService,
    private alertCtrl: AlertController,
    private toastCtrl: ToastController,
    private loadingCtrl: LoadingController,
    private router: Router,
    private navCtrl: NavController,
    private toastCrtl: ToastController,
    // private router: Router,
    private http: HttpClient,
  ) { }

  

  form = new FormGroup({
    TournamentName: new FormControl('', [Validators.required, Validators.maxLength(25),]),
    StartDate: new FormControl('', [Validators.required, Validators.maxLength(25),]),
    EndDate: new FormControl('', [Validators.required, Validators.maxLength(25),]),
    OrgEmail: new FormControl('', [Validators.required, Validators.maxLength(50),]),
    OrgPhone: new FormControl('', [Validators.required, Validators.maxLength(15),]),
    

    TournamentType: new FormControl('', [Validators.required, Validators.maxLength(50),]),
    Venue: new FormControl('', [Validators.required, Validators.maxLength(50),]),
    State: new FormControl('', [Validators.required, Validators.maxLength(25),]),
    City: new FormControl('', [Validators.required, Validators.maxLength(25),]),

    Broadcast: new FormControl('', [Validators.required, Validators.maxLength(50),]),
    Sponsorship: new FormControl('', [Validators.required, Validators.maxLength(50),]),
    PrizeMoney: new FormControl('', [Validators.required, Validators.maxLength(50),]),
    RegFees: new FormControl('', [Validators.required, Validators.maxLength(50),]),
    Overs: new FormControl('', [Validators.required, Validators.maxLength(50),]),
   
    Fullname: new FormControl('', [Validators.required, Validators.maxLength(25),]),
    Phone: new FormControl('', [Validators.required, Validators.maxLength(25),]),
    Email: new FormControl('', [Validators.required, Validators.maxLength(11),]),
    
  });

  async onSubmit(form: FormGroup) {
    const headers = {
      'enctype': 'multipart/form-data;',
      'Content-Type': 'application/json',
      'Accept': 'plain/text',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT',
      'Access-Control-Allow-Headers': 'Authorization, Origin, Content-Type, X-CSRF-Token',
    };

    if (form.value.TournamentName == '' && form.value.OrgEmail == '' && form.value.State == '' && form.value.City == '' && form.value.RegFees == '') {
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
        TournamentName: form.value.TournamentName,
        StartDate: form.value.StartDate,
        EndDate: form.value.EndDate,
        OrgEmail: form.value.OrgEmail,
        OrgPhone: form.value.OrgPhone,

        TournamentType: form.value.TournamentType,
        Venue: form.value.Venue,
        State: form.value.State,
        City: form.value.City,
        Broadcast: form.value.Broadcast,

        Sponsorship: form.value.Sponsorship,
        PrizeMoney: form.value.PrizeMoney,
        RegFees: form.value.RegFees,
        Overs: form.value.Overs
      };

      this.service.create(dataJson).subscribe(async res => {
        console.log(res);
        this.router.navigateByUrl('/organizer-dash');
        const toast = await this.toastCtrl.create({
          message: 'SuccessFully Tournament Registered!',
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

    this.storage.get('organizer').then((data) => {

      this.getUser(JSON.parse(data));
     });
  }
  currentUser: any;

  getUser(user: any){
    // console.log(user);

    this.service2.check(user._id).subscribe(res =>{
      // console.log(res);
      this.currentUser = res;
      console.log(this.currentUser)
      this.form.patchValue({
        OrgPhone: this.currentUser.Phone,
        OrgEmail: this.currentUser.Email,
        
      })
    },err=>{
      console.log(err);
    })

  }

}
