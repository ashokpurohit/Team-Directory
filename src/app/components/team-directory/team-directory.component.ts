import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { combineLatest, map } from 'rxjs';
import { TeamDirectory } from 'src/app/_models/teamDirectory';
import { DataService } from 'src/app/_services/data.service';

@Component({
  selector: 'app-team-directory',
  templateUrl: './team-directory.component.html',
  styleUrls: ['./team-directory.component.scss']
})
export class TeamDirectoryComponent implements OnInit, OnChanges{
  @Input() title: any;
  @Input() teamDirectorys: TeamDirectory[] = [];

  teamDirectoryData: TeamDirectory[] =[];

  constructor(public dataService: DataService) {
  }

  ngOnInit() {
    this.dataService.searchQuery$.subscribe(searchQuery => {
      this.teamDirectoryData = this.teamDirectorys.filter(({first_name, last_name, email}) => first_name.includes(searchQuery) || last_name.includes(searchQuery) || email.includes(searchQuery));
    }) 
  }

  ngOnChanges(changes: SimpleChanges){
   this.teamDirectoryData = changes['teamDirectorys'].currentValue;
  }

}
