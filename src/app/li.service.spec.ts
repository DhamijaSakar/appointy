import { TestBed, inject } from '@angular/core/testing';

import { LiService } from './li.service';

describe('LiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LiService]
    });
  });

  it('should be created', inject([LiService], (service: LiService) => {
    expect(service).toBeTruthy();
  }));
});
