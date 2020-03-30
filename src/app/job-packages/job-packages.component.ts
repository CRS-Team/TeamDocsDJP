import { Component, OnInit } from '@angular/core';
import { JobPackage } from '../jobPackage';
import { JobPackageService } from '../services/job-package.service';

@Component({
  selector: 'app-job-packages',
  templateUrl: './job-packages.component.html',
  styleUrls: ['./job-packages.component.css']
})
export class JobPackagesComponent implements OnInit {

  jobPackages: JobPackage[];

  message : JobPackage[]

  constructor(private jobPackageService: JobPackageService) { }

  ngOnInit(): void {
    this.getJobPackages();

    this.getMockJobPackages();
  };
  
  getJobPackages(): void {
    this.jobPackageService.getJobPackages()
      .subscribe(jobPackages => this.jobPackages = jobPackages)
  }

  getMockJobPackages(): void {
    this.message = this.jobPackageService.getMockJobPackages();
  }

}

