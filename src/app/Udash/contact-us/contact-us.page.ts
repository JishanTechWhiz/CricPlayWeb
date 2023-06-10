import { Component, OnInit } from '@angular/core';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';
import { FormControl, FormGroup, Validators } from '@angular/forms';

declare var name: any;
@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.page.html',
  styleUrls: ['./contact-us.page.scss'],
})
export class ContactUsPage implements OnInit {

  constructor() { }

  

  ngOnInit() {
    new name();
  }


 

  

  public sendEmail(e: Event) {
    
    e.preventDefault();
    emailjs.sendForm('service_66yc57b', 'template_grbbxns', e.target as HTMLFormElement, '4v3cE9mNRcQGmwB8j')
      .then((result: EmailJSResponseStatus) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });

      
  }

}
