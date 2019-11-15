import { TestBed } from '@angular/core/testing';

import { ThumbUploadService } from './thumb-upload.service';

describe('ThumbUploadService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ThumbUploadService = TestBed.get(ThumbUploadService);
    expect(service).toBeTruthy();
  });
});
