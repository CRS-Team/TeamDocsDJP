import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';

import { JobPackage } from '../JobPackage';
import { JOBPACKAGES } from '../mock-jobpackages';

@Injectable({
    providedIn: 'root',
})
export class JobPackageService {
    

    jpURL = "https://localhost:5001/api/todoitems";

    headers = new HttpHeaders({
        "X-Authentication": "g-cfkqW97RXG56gdNjUKX7zXAdtSEVC9bZcpiqG0Mz8x_nUpNAkvKZD5jn7QBBs7X5iNPB173nSdXjLQ8S-RHIduIsTCcgZmDFn9nIdsw0yV2bC-4ZItzOr3gItjDoV_i3aiZWBTwEAbi4Z8YT8NlSzNfszV7h4GEGmRiJk76EQY7vdmvUGjr6eNp4sYrfiyqMRZ51ycpvfGfDiqH9i60jzs27x7znkMPKcj9a-efv4bnxd-yKHUh31R4xwPvDktvcqagIJPqLk2z0WXgxZmHhd-2C5-rBFEI2VAqZHleMxjwH8F_nboD4vVJn1QG721OQEhVD2Sh15GjdGgyX7uow",
        'Content-Type': 'application/json'})
        
    constructor(private http: HttpClient) { }


    getJobPackages(): Observable<JobPackage[]> {
        
            
        return this.http
            .get<JobPackage[]>(this.jpURL);
    
    }

    getMockJobPackages(): JobPackage[] {
        
        return JOBPACKAGES;
    }
}