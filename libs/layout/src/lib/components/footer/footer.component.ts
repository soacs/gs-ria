import { Component, OnChanges, Input } from '@angular/core';

import { ContentstackService } from '@shared/aws-integration';
import { FooterConfig } from './footer.interface';

@Component({
  selector: 'ria-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnChanges {
  @Input() brand: string;
  contentType = 'footer';
  environment = 'dev';
  footerConfig: FooterConfig;

  constructor(private contentStackService: ContentstackService) {}

  ngOnChanges() {
    this.callContentStackAPI(this.brand, this.contentType, this.environment);
  }

  callContentStackAPI(brand, contentType, environment): void {
    this.contentStackService.getEntry(brand, contentType, environment).subscribe((res) => {
      this.footerConfig = res[0];
    });
  }
}
