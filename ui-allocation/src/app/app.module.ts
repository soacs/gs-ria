import { NgModule, Injector, DoBootstrap } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SharedUiAllocationModule, UiAllocationComponent } from '@shared/ui-allocation';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, SharedUiAllocationModule],
  providers: []
})

export class AppModule implements DoBootstrap {
  constructor(private injector: Injector) {
  }

  public ngDoBootstrap(): void {
    const uiAllocationElement = createCustomElement(UiAllocationComponent, { injector: this.injector });
    customElements.define('ria-ui-allocation-element', uiAllocationElement);
  }
}
