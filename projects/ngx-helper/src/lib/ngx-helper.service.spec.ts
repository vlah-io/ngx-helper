import { TestBed } from '@angular/core/testing';

import { NgxHelperService } from './ngx-helper.service';

describe('NgxHelperService', () => {
  let service: NgxHelperService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxHelperService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
