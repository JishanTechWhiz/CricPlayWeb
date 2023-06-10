import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';
import { TournamentService } from '../tournament.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-join-form',
  templateUrl: './join-form.page.html',
  styleUrls: ['./join-form.page.scss'],
})
export class JoinFormPage implements OnInit {

  constructor(private service:TournamentService,
    private alerts:AlertController,
    private toastCtrl:ToastController,
    private http: HttpClient,
    private router: ActivatedRoute,
    private navRouter: Router) { }
  datauser :any;

  form:any = new FormGroup({
    _id : new FormControl('', [Validators.required, Validators.maxLength(25),]),
    
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

  ngOnInit() {
    this.service.check(this.router.snapshot.params['id']).subscribe((res: any) => {
      this.form = new FormGroup({
        _id : new FormControl(res['_id']),
        TournamentName: new FormControl(res['TournamentName']),
        StartDate: new FormControl(res['StartDate']),
        EndDate: new FormControl(res['EndDate']),
        OrgEmail: new FormControl(res['OrgEmail']),
        OrgPhone: new FormControl(res['OrgPhone']),

        TournamentType: new FormControl(res['TournamentType']),
        Venue: new FormControl(res['Venue']),
        State: new FormControl(res['State']),
        City: new FormControl(res['City']),

        Broadcast: new FormControl(res['Broadcast']),
        Sponsorship: new FormControl(res['Sponsorship']),
        PrizeMoney: new FormControl(res['PrizeMoney']),
        RegFees: new FormControl(res['RegFees']),
        Overs: new FormControl(res['Overs'])
      })

    });
    this.displayData();
  }

  displayData(){
    this.service.display().subscribe((data)=>{
      this.datauser=data;
    });
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
      _id : form.value._id,
      TournamentName:form.value.TournamentName,
      StartDate: form.value.StartDate,
      EndDate: form.value.EndDate,
      OrgEmail: form.value.OrgEmail,
      OrgPhone: form.value.OrgPhone,

      TournamentType: form.value.TournamentType,
      Venue:form.value.Venue,
      State: form.value.State,
      City: form.value.City,

      Broadcast: form.value.Broadcast,
      Sponsorship: form.value.Sponsorship,
      PrizeMoney:form.value.PrizeMoney,
      RegFees: form.value.RegFees,
      Overs: form.value.Overs,
    };

    this.service.update(dataJson).subscribe(async res => {
      console.log(res);
      this.navRouter.navigateByUrl('/organizer-dash');
      const toast = await this.toastCtrl.create({
        message: 'Cargo update Succesfully!',
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
