import { TestBed } from '@angular/core/testing';
import { security } from './security';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [],
    }).compileComponents();
  });

  it('should call the getByLoginId', () => {
    const loginId = 'liotineg';
    expect(security.getByLoginId(loginId)).toBe(`/foliofn/restapi/members/liotineg`);
  });

});