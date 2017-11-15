import { TestBed, inject } from '@angular/core/testing';

import { GetstoreService } from './getstore.service';

describe('GetstoreService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetstoreService]
    });
  });

  it('should be created', inject([GetstoreService], (service: GetstoreService) => {
    expect(service).toBeTruthy();
  }));
});
