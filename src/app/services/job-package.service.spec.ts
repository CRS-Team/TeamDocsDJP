import { TestBed } from '@angular/core/testing';

import { JobPackageService } from './job-package.service';

describe('JobPackageService', () => {
  let service: JobPackageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JobPackageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
