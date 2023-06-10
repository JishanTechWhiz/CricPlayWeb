import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
   /*private logUrl = environment.loginUrl;
  private regUrl = environment.registerUrl;

  private disUrl = environment.disUserUrl;
  private upUrl = environment.updateUserUrl;*/

  // private disUrl = environment.displayUrl;
  // private upUrl = environment.upUrl;

  private logUrl = 'https://cricknightbackend.onrender.com/Users/login';
  private regUrl = 'https://cricknightbackend.onrender.com/Users/register';
  private disUrl = 'https://cricknightbackend.onrender.com/Users';
  private upUrl = 'https://cricknightbackend.onrender.com/Users';



  constructor(private http: HttpClient) { 
    
  }
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
