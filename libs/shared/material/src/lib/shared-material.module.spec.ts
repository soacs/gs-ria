import { TestBed } from '@angular/core/testing';

import { name } from './shared-material.module';

describe('SharedMaterialModule', () => {

  it('should be created', () => {
    expect(name()).toEqual("SharedMaterialModule");
  });
});
