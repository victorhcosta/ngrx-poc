import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { GithubEffects } from './github.effects';

describe('GithubEffects', () => {
  let actions$: Observable<any>;
  let effects: GithubEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        GithubEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(GithubEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
