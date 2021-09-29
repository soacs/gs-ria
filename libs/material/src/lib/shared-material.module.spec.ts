import { TestBed, waitForAsync } from '@angular/core/testing';

import { SharedMaterialModule } from './shared-material.module';

describe('SharedMaterialModule', () => {
  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [SharedMaterialModule]
      }).compileComponents();
    })
  );

  // TODO: Add real tests here.
  //
  // NB: This particular test does not do anything useful.
  //     It does NOT check for correct instantiation of the module.
  it('should have a module definition', () => {
    expect(SharedMaterialModule).toBeDefined();
  });
});
