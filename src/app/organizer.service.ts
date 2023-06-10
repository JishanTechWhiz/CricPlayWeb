import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OrganizerService {
  /*private logUrl = environment.OrgLoginUrl;
  private regUrl = environment.OrgSignUrl;

  private disUrl = environment.disOrgUrl;
  private upUrl = environment.updateOrgUrl;*/

  private logUrl = 'https://cricknightbackend.onrender.com/Org/login';
  private regUrl = 'https://cricknightbackend.onrender.com/Org/addorganizer';
  private disUrl = 'https://cricknightbackend.onrender.com/Org/';
  private upUrl = 'https://cricknightbackend.onrender.com/Org/';


  constructor(private http: HttpClient) { }

  create(student: any){
    return this.http.post(this.regUrl, student);
  }
  login(credentials: any){
    return this.http.post(this.logUrl, credentials);
  }

  updates(email: any){
    return this.http.put(this.upUrl,email);
  }

  check(id:any) {
    console.log(id);

    let url3 = this.disUrl;
    return this.http.get(url3 + '/' + id);
  }
}
