import { Component, OnChanges, Input } from '@angular/core';

import { ContentstackService } from '@shared/aws-integration';
import { HeaderConfig } from './header.interface';

@Component({
  selector: 'ria-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnChanges {
  @Input() brand: string;
  contentType = 'header';
  environment = 'dev';
  headerConfig: HeaderConfig;

  constructor(private contentStackService: ContentstackService) {}

  ngOnChanges() {
    this.callContentStackAPI(this.brand, this.contentType, this.environment);
  }

  callContentStackAPI(brand, contentType, environment): void {
    this.contentStackService.getEntry(brand, contentType, environment).subscribe((res) => {
      this.headerConfig = res[0];
    });
  }
}
