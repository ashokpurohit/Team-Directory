import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamDirectoryComponent } from './team-directory.component';

describe('TeamDirectoryComponent', () => {
  let component: TeamDirectoryComponent;
  let fixture: ComponentFixture<TeamDirectoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeamDirectoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeamDirectoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
