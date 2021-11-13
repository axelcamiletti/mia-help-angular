import { TestBed } from '@angular/core/testing';

import { MiaHelpCoreService } from './mia-help-core.service';

describe('MiaHelpCoreService', () => {
  let service: MiaHelpCoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MiaHelpCoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
