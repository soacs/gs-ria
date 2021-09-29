import { TestBed, waitForAsync } from '@angular/core/testing';

import { SharedInvestingModule } from '@shared/investing';

jest.mock('@material/mwc-button', () => jest.fn());

describe('SharedInvestingModule', () => {
  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [SharedInvestingModule]
      }).compileComponents();
    })
  );

  // TODO: Add real tests here.
  //
  // NB: This particular test does not do anything useful.
  //     It does NOT check for correct instantiation of the module.
  it('should have a module definition', () => {
    expect(SharedInvestingModule).toBeDefined();
  });
});
