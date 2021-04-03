import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { TeamModel } from 'src/models/team';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {

  constructor(private httpClient: HttpClient) { }
  listTeam: TeamModel[]
  ngOnInit() {
    this.getTeams();
  }

  getTeams() {
    return this.httpClient.get<TeamModel[]>("https://localhost:44341/api/Teams").subscribe(success => {
      this.listTeam = success;
    });
  }

  deleteTeam(team: TeamModel) {
    return this.httpClient.delete("https://localhost:44341/api/Teams/" + team.id).subscribe(success => {
      this.listTeam.splice(this.listTeam.indexOf(team), 1);
    });
  }

  

}


