import { Component, OnInit } from '@angular/core';
import { TournamentService } from '../../tournament.service';

@Component({
  selector: 'app-join-tournament',
  templateUrl: './join-tournament.page.html',
  styleUrls: ['./join-tournament.page.scss'],
})
export class JoinTournamentPage implements OnInit {

  datauser :any;
  constructor(private service:TournamentService) { }

  ngOnInit() {
    this.displayData();
  }

  displayData(){
    this.service.display().subscribe((data)=>{
      this.datauser=data;
    });
  }

}
