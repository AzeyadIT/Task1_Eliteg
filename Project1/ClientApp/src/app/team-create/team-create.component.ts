import { PlayerModel } from './../../models/player';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { TeamModel } from 'src/models/team';

@Component({
  selector: 'app-team-create',
  templateUrl: './team-create.component.html',
  styleUrls: ['./team-create.component.css']
})
export class TeamCreateComponent implements OnInit {
  team: TeamModel;
  id: number;
  imageTeam: any;


  constructor(private http: HttpClient, private route: Router, private routePram: ActivatedRoute) { }

  ngOnInit() {
    this.team = new TeamModel();
    this.team.players = [new PlayerModel()];
    console.log(this.team);
    this.routePram.params.subscribe(params => {
      this.id = params['id'];
      if (this.checkEditMode())
        this.getTeam(this.id);
    });
  }
  onSubmit() {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    let options = { headers: headers };
    this.http.post("https://localhost:44341/api/Teams", this.diagnostic, options).subscribe((res) => {
      this.route.navigateByUrl("/Teams");
      console.log(res);
    });

  }

  addPlayer() {
    this.team.players.push(new PlayerModel());
  }

  get diagnostic() { return JSON.stringify(this.team); }

  updateTeam(team: TeamModel) {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    let options = { headers: headers };
    return this.http.put("https://localhost:44341/api/Teams/" + team.id, team, options).subscribe(success => {
    });
  }


  getTeam(id: number) {
    return this.http.get<TeamModel>("https://localhost:44341/api/Teams/" + id).subscribe(success => {
      console.log(success);
      this.team = success;
    });
  }

  checkEditMode() {
    return this.id !== undefined;
  }

  public fileChange(files: any[]) {

    if (files && files.length > 0) {
      let file = files[0];
      this.imageTeam = file.fileAsBase64;
      console.log(this.imageTeam);
   
    }

  }
}
