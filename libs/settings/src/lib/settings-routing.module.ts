import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';
import { SettingsComponent } from './components/settings/settings.component';
import { SettingsResolver } from './resolvers/settings.resolver';

const routes: Route[] = [
  {
    component: SettingsComponent,
    path: '',
    resolve: {
      settings: SettingsResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingsRoutingModule {}
