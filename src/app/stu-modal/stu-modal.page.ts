import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, LoadingController, ModalController } from '@ionic/angular';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-stu-modal',
  templateUrl: './stu-modal.page.html',
  styleUrls: ['./stu-modal.page.scss'],
})
export class StuModalPage implements OnInit {

  constructor(
    private modalCtrl : ModalController,
    private loading : LoadingController,
    private alert : AlertController,
    private service : StudentService,
    private router : Router
    ) { }

  ngOnInit() {
  }

  

  

}
