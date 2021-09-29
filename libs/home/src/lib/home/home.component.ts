import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { FeatureFlagsService, ContentstackService } from '@shared/aws-integration';
import { CenterContent } from './home.interface';
import { SettingsFacade } from '@ria/settings';

@Component({
  selector: 'ria-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  brand: string;
  getHomeContentFromBrand$: Subscription;
  contentType = 'homepage_content';
  environment = 'dev';
  centerConfig: CenterContent;
  breakingNewsFlag: any; // eslint-disable-line @typescript-eslint/no-explicit-any

  constructor(
    public featureFlagsService: FeatureFlagsService,
    private contentStackService: ContentstackService,
    private settingsFacade: SettingsFacade
  ) {}
  ngOnInit(): void {
    this.featureFlagsService
      .getFeatureFlags('Anonymous')
      .subscribe((res) => (this.breakingNewsFlag = res.breakingNews));

    this.getHomeContentFromBrand$ = this.settingsFacade.getBrand$
      .pipe(
        switchMap((brand) => {
          this.brand = brand;
          return this.contentStackService.getEntry(this.brand, this.contentType, this.environment);
        })
      )
      .subscribe((homeContent) => {
        this.centerConfig = homeContent[0];
      });
  }

  ngOnDestroy() {
    this.getHomeContentFromBrand$.unsubscribe();
  }
}
