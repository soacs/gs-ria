import { Injectable } from '@angular/core';
import { StyleManagerService } from './style-manager.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ContentstackService } from '@shared/aws-integration';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  currentTheme: string;

  private contentType = 'themes';
  private environment = 'dev';

  constructor(private styleManager: StyleManagerService, private contentstackService: ContentstackService) {}

  setTheme(theme) {
    if (theme && this.currentTheme !== theme) {
      this.styleManager.removeStyle('theme');
      this.styleManager.setStyle('theme', `styles/${theme}.css`);
    }

    this.currentTheme = theme;
  }

  /* eslint-disable  @typescript-eslint/no-explicit-any */
  getThemesInfo(brand: string): Observable<any> {
    return this.contentstackService.getEntry(brand, this.contentType, this.environment).pipe(
      map((themesInfo) => {
        const currentTheme = themesInfo[0];
        return (
          currentTheme && {
            brand,
            theme: currentTheme.defaulttheme,
            themes: currentTheme.group.map((themeInfo) => themeInfo.themename)
          }
        );
      })
    );
  }
}
