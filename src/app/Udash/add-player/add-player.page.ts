import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { TeamService } from '../../team.service';
import { AlertController, LoadingController, NavController, ToastController,MenuController } from '@ionic/angular';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../user.service';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-add-player',
  templateUrl: './add-player.page.html',
  styleUrls: ['./add-player.page.scss'],
})
export class AddPlayerPage implements OnInit {

  constructor(
    private service2: UserService,
    private storage: Storage,
    private router2: ActivatedRoute,
    private navRouter: Router,

     private service: TeamService,
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
    TeamName: new FormControl('', [Validators.required, Validators.maxLength(50),]),
    CoachName: new FormControl('', [Validators.required, Validators.maxLength(50),]),
    Email: new FormControl('', [Validators.required, Validators.maxLength(50),]),


    Pname1: new FormControl('', [Validators.required, Validators.maxLength(50),]),
    Page1: new FormControl('', [Validators.required, Validators.maxLength(50),]),
    Ptype1: new FormControl('', [Validators.required, Validators.maxLength(50),]),

    Pname2: new FormControl('', [Validators.required, Validators.maxLength(50),]),
    Page2: new FormControl('', [Validators.required, Validators.maxLength(50),]),
    Ptype2: new FormControl('', [Validators.required, Validators.maxLength(50),]),

    Pname3: new FormControl('', [Validators.required, Validators.maxLength(50),]),
    Page3: new FormControl('', [Validators.required, Validators.maxLength(50),]),
    Ptype3: new FormControl('', [Validators.required, Validators.maxLength(50),]),

    Pname4: new FormControl('', [Validators.required, Validators.maxLength(50),]),
    Page4: new FormControl('', [Validators.required, Validators.maxLength(50),]),
    Ptype4: new FormControl('', [Validators.required, Validators.maxLength(50),]),

    Pname5: new FormControl('', [Validators.required, Validators.maxLength(50),]),
    Page5: new FormControl('', [Validators.required, Validators.maxLength(50),]),
    Ptype5: new FormControl('', [Validators.required, Validators.maxLength(50),]),

    Pname6: new FormControl('', [Validators.required, Validators.maxLength(50),]),
    Page6: new FormControl('', [Validators.required, Validators.maxLength(50),]),
    Ptype6: new FormControl('', [Validators.required, Validators.maxLength(50),]),

    Pname7: new FormControl('', [Validators.required, Validators.maxLength(50),]),
    Page7: new FormControl('', [Validators.required, Validators.maxLength(50),]),
    Ptype7: new FormControl('', [Validators.required, Validators.maxLength(50),]),

    Pname8: new FormControl('', [Validators.required, Validators.maxLength(50),]),
    Page8: new FormControl('', [Validators.required, Validators.maxLength(50),]),
    Ptype8: new FormControl('', [Validators.required, Validators.maxLength(50),]),

    Pname9: new FormControl('', [Validators.required, Validators.maxLength(50),]),
    Page9: new FormControl('', [Validators.required, Validators.maxLength(50),]),
    Ptype9: new FormControl('', [Validators.required, Validators.maxLength(50),]),

    Pname10: new FormControl('', [Validators.required, Validators.maxLength(50),]),
    Page10: new FormControl('', [Validators.required, Validators.maxLength(50),]),
    Ptype10: new FormControl('', [Validators.required, Validators.maxLength(50),]),

    Pname11: new FormControl('', [Validators.required, Validators.maxLength(50),]),
    Page11: new FormControl('', [Validators.required, Validators.maxLength(50),]),
    Ptype11: new FormControl('', [Validators.required, Validators.maxLength(50),]),

   
    Phone: new FormControl('', [Validators.required, Validators.maxLength(50),]),
    State: new FormControl('', [Validators.required, Validators.maxLength(50),]),
    City: new FormControl('', [Validators.required, Validators.maxLength(50),]),
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
        TeamName: form.value.TeamName,
        CoachName: form.value.CoachName,
        Email: form.value.Email,
        
        Pname1: form.value.Pname1,
        Page1: form.value.Page1,
        Ptype1: form.value.Ptype1,

        Pname2: form.value.Pname2,
        Page2: form.value.Page2,
        Ptype2: form.value.Ptype2,

        Pname3: form.value.Pname3,
        Page3: form.value.Page3,
        Ptype3: form.value.Ptype3,

        Pname4: form.value.Pname4,
        Page4: form.value.Page4,
        Ptype4: form.value.Ptype4,

        Pname5: form.value.Pname5,
        Page5: form.value.Page5,
        Ptype5: form.value.Ptype5,

        Pname6: form.value.Pname6,
        Page6: form.value.Page6,
        Ptype6: form.value.Ptype6,

        Pname7: form.value.Pname7,
        Page7: form.value.Page7,
        Ptype7: form.value.Ptype7,

        Pname8: form.value.Pname8,
        Page8: form.value.Page8,
        Ptype8: form.value.Ptype8,

        Pname9: form.value.Pname9,
        Page9: form.value.Page9,
        Ptype9: form.value.Ptype9,

        Pname10: form.value.Pname10,
        Page10: form.value.Page10,
        Ptype10: form.value.Ptype10,

        Pname11: form.value.Pname11,
        Page11: form.value.Page11,
        Ptype11: form.value.Ptype11,


        Phone: form.value.Phone,
        State: form.value.State,
        City: form.value.City,
      };

      this.service.create(dataJson).subscribe(async res => {
        console.log(res);
        // this.storage.set('myteam', JSON.stringify(res));
        this.router.navigateByUrl('/user-dash');
        const toast = await this.toastCtrl.create({
          message: 'SuccessFully Team Registered!',
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

    this.storage.get('user').then((data) => {

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
        Phone: this.currentUser.Phone,
        Email: this.currentUser.Email,
        
      })
    },err=>{
      console.log(err);
    })

  }

}
