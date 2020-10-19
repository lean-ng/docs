import { TestBed } from '@angular/core/testing';

import { TocResolverService } from './toc-resolver.service';

describe('TocResolverService', () => {
  let service: TocResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TocResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
