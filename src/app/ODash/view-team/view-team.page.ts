import { Component, OnInit } from '@angular/core';
import { TeamService } from '../../team.service';

@Component({
  selector: 'app-view-team',
  templateUrl: './view-team.page.html',
  styleUrls: ['./view-team.page.scss'],
})
export class ViewTeamPage implements OnInit {

  datauser :any;
  constructor(private service:TeamService) { }

  ngOnInit() {
    this.displayData();
  }

  displayData(){
    this.service.display().subscribe((data)=>{
      this.datauser=data;
    });
  }

}
