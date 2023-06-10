import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TournamentService {

 /* private addTourUrl = environment.addTournamentUrl;
  private distourUrl = environment.disTournamentUrl;

  private upUrl = environment.upTournamentUrl;*/

  private addTourUrl = 'https://cricknightbackend.onrender.com/Tournament/addTournaments';
  private distourUrl = 'https://cricknightbackend.onrender.com/Tournament';
  private upUrl = 'https://cricknightbackend.onrender.com/Tournament';
  



  constructor(private http: HttpClient) { }

  create(student: any){
    return this.http.post(this.addTourUrl, student);
  }

  display(){
    const distourUrl = this.distourUrl;
   return this.http.get(distourUrl);
 }

 update(data:any){
  return this.http.put(this.upUrl,data);
}

check(id:any) {
  console.log(id);

  let url3 = this.distourUrl;
  return this.http.get(url3 + '/' + id);
}

deletes(id:string){
  let url4 = this.distourUrl;
   return this.http.delete(url4+'/'+id);
}
}
