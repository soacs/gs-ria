import { Injectable } from '@angular/core';

/**
 * Class for managing stylesheets. Stylesheets are loaded into named slots so that they can be
 * removed or changed later.
 */
@Injectable({
  providedIn: 'root'
})
export class StyleManagerService {
  /**
   * Set the stylesheet with the specified themeName.
   */
  setStyle(themeName: string, href: string) {
    this.getLinkElementForKey(themeName).setAttribute('href', href);
  }

  /**
   * Remove the stylesheet with the specified themeName.
   */
  removeStyle(themeName: string) {
    const existingLinkElement = this.getExistingLinkElementByKey(themeName);
    if (existingLinkElement) {
      document.head.removeChild(existingLinkElement);
    }
  }

  private getLinkElementForKey(themeName: string) {
    return this.getExistingLinkElementByKey(themeName) || this.createLinkElementWithKey(themeName);
  }

  private getExistingLinkElementByKey(themeName: string) {
    return document.head.querySelector(`link[rel="stylesheet"].${this.getClassNameForKey(themeName)}`);
  }

  private createLinkElementWithKey(themeName: string) {
    const linkEl = document.createElement('link');
    linkEl.setAttribute('rel', 'stylesheet');
    linkEl.classList.add(this.getClassNameForKey(themeName));
    document.head.appendChild(linkEl);
    return linkEl;
  }

  private getClassNameForKey(themeName: string) {
    return `style-manager-${themeName}`;
  }
}
