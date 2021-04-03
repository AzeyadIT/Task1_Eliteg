import { PlayerModel } from './../../models/player';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TeamModel } from 'src/models/team';

@Component({
  selector: 'app-team-details',
  templateUrl: './team-details.component.html',
  styleUrls: ['./team-details.component.css']
})
export class TeamDetailsComponent implements OnInit {
  id: number;
  team: TeamModel;

  constructor(private route: ActivatedRoute, private httpClient: HttpClient) { }
  listTeam: TeamModel[]

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = +params['id'];
      this.getTeam(this.id);
    });
  }

  getTeam(id: number) {
    return this.httpClient.get<TeamModel>("https://localhost:44341/api/Teams/" + id).subscribe(success => {
      console.log(success);
      this.team = success;
    });
  }

  deletePlayer(player: PlayerModel) {
    return this.httpClient.delete("https://localhost:44341/api/Players/" + player.id).subscribe(success => {
      this.team.players.splice(this.team.players.indexOf(player),1);
    });
  }


}
