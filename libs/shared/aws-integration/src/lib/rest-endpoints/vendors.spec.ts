import { TestBed } from '@angular/core/testing';
import { vendors } from './vendors';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: []
    }).compileComponents();
  });

  it('should call the bondnavsso', () => {
    const vendorId = 'RA12345';
    const memberOid = '1234';
    expect(vendors.bondnavsso.get(memberOid, vendorId)).toBe(`/vendors/sso?memberOid=1234&vendor=RA12345`);
  });
});
