import { TestBed } from '@angular/core/testing';

import { ContentGetPostService } from './content-get-post.service';

describe('ContentGetPostService', () => {
  let service: ContentGetPostService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContentGetPostService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
