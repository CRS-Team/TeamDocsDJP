import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobPackagesComponent } from './job-packages.component';

describe('JobPackagesComponent', () => {
  let component: JobPackagesComponent;
  let fixture: ComponentFixture<JobPackagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobPackagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobPackagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
