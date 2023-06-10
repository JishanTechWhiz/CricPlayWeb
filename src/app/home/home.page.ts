import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { StuModalPage } from '../stu-modal/stu-modal.page';
import { StudentService } from '../student.service';



@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

 
  constructor(
    private service: StudentService,
    private modalCtrl: ModalController
    ) {}

  ngOnInit(){
    
  }

  addStudent(){
    this.modalCtrl.create({
      component: StuModalPage
    }).then(modal => modal.present());
  }

}
