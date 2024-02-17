import { Component, OnInit, ViewChild } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { TeamDirectory } from 'src/app/_models/teamDirectory';
import { DataService } from 'src/app/_services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  teamDirectorys: TeamDirectory[] = [];
  adminTeamDirectorys: TeamDirectory[] = [];
  memberTeamDirectorys: TeamDirectory[] = [];

  constructor(public dataService: DataService) {
  }

  ngOnInit(): void {
    this.getTeamDirectoryData();
  }

  getTeamDirectoryData() {
    this.dataService.getTeamDirectoryData().subscribe((data: any) => {
      this.teamDirectorys = data;
      this.adminTeamDirectorys = data.filter((td: TeamDirectory) => td.role === 'admin');
      this.memberTeamDirectorys = data.filter((td: TeamDirectory) => td.role === 'member');
    })
  }
  onSearchUpdated(searchQuery: string) {
    this.dataService.searchQuery$.next(searchQuery);
  }
}
