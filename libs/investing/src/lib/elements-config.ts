import { InjectionToken } from '@angular/core';
export interface InvestingElementsConfigTokenType {
  version: string;
  name: string;
}

export const investingElementsConfigToken = new InjectionToken<InvestingElementsConfigTokenType>(
  'investing-elements-config'
);
