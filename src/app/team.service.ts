import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  /*private teamUrl = environment.addTeamUrl;
  private disUrl = environment.disTeamUrl;*/

  // private disUrl = environment.disUserUrl;
  /*private upUrl = environment.upTeamUrl;*/

  private teamUrl = 'https://cricknightbackend.onrender.com/Teamss/addTeams';
  private disUrl = 'https://cricknightbackend.onrender.com/Teamss';
  private upUrl = 'https://cricknightbackend.onrender.com/Teamss';
  

  constructor(private http: HttpClient) { }

  create(student: any){
    return this.http.post(this.teamUrl, student);
  }

  display(){
     const disUrl = this.disUrl;
    return this.http.get(disUrl);
  }

  update(data: any){
    return this.http.put(this.upUrl,data);
  }

  check(id:any) {
    console.log(id);

    let url3 = this.disUrl;
    return this.http.get(url3 + '/' + id);
  }

  deletes(id:string){
    let url4 = this.disUrl;
     return this.http.delete(url4+'/'+id);
  }
}
