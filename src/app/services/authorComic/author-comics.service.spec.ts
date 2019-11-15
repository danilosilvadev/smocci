import { TestBed } from '@angular/core/testing';

import { AuthorComicsService } from './author-comics.service';

describe('AuthorComicsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AuthorComicsService = TestBed.get(AuthorComicsService);
    expect(service).toBeTruthy();
  });
});
