import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TeamDirectory } from '../_models/teamDirectory';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  searchQuery$ = new BehaviorSubject<string>('');

  constructor(private http: HttpClient) { }

  public getTeamDirectoryData() {
    return this.http.get<any>('https://mocki.io/v1/ddb7e0a8-e218-4e36-b1be-b902cdb1c098')
  }
}
