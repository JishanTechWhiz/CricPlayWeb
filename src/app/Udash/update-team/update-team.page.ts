import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';
import { TeamService } from '../../team.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-update-team',
  templateUrl: './update-team.page.html',
  styleUrls: ['./update-team.page.scss'],
})
export class UpdateTeamPage implements OnInit {

  constructor(private service:TeamService,
    private alerts:AlertController,
    private toastCtrl:ToastController,
    private http: HttpClient,
    private router: ActivatedRoute,
    private navRouter: Router) { }

    datauser :any;

    form:any = new FormGroup({
      _id : new FormControl('', [Validators.required, Validators.maxLength(25),]),
    
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

  ngOnInit() {
    this.service.check(this.router.snapshot.params['id']).subscribe((res: any) => {
      this.form = new FormGroup({
        _id : new FormControl(res['_id']),

        TeamName: new FormControl(res['TeamName']),
        CoachName: new FormControl(res['CoachName']),
        Email: new FormControl(res['Email']),

        Pname1: new FormControl(res['Pname1']),
        Page1: new FormControl(res['Page1']),
        Ptype1: new FormControl(res['Ptype1']),

        Pname2: new FormControl(res['Pname2']),
        Page2: new FormControl(res['Page2']),
        Ptype2: new FormControl(res['Ptype2']),

        Pname3: new FormControl(res['Pname3']),
        Page3: new FormControl(res['Page3']),
        Ptype3: new FormControl(res['Ptype3']),

        Pname4: new FormControl(res['Pname4']),
        Page4: new FormControl(res['Page4']),
        Ptype4: new FormControl(res['Ptype4']),

        Pname5: new FormControl(res['Pname5']),
        Page5: new FormControl(res['Page5']),
        Ptype5: new FormControl(res['Ptype5']),

        Pname6: new FormControl(res['Pname6']),
        Page6: new FormControl(res['Page6']),
        Ptype6: new FormControl(res['Ptype6']),

        Pname7: new FormControl(res['Pname7']),
        Page7: new FormControl(res['Page7']),
        Ptype7: new FormControl(res['Ptype7']),

        Pname8: new FormControl(res['Pname8']),
        Page8: new FormControl(res['Page8']),
        Ptype8: new FormControl(res['Ptype8']),

        Pname9: new FormControl(res['Pname9']),
        Page9: new FormControl(res['Page9']),
        Ptype9: new FormControl(res['Ptype9']),

        Pname10: new FormControl(res['Pname10']),
        Page10: new FormControl(res['Page10']),
        Ptype10: new FormControl(res['Ptype10']),

        Pname11: new FormControl(res['Pname11']),
        Page11: new FormControl(res['Page11']),
        Ptype11: new FormControl(res['Ptype11']),
        

        Phone: new FormControl(res['Phone']),
        State: new FormControl(res['State']),
        City: new FormControl(res['City']),
        
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

    this.service.update(dataJson).subscribe(async res => {
      console.log(res);
      this.navRouter.navigateByUrl('/user-dash');
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
