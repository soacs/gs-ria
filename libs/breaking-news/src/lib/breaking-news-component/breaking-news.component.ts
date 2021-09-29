import { Component, OnInit, Input } from '@angular/core';

import { BreakingNewsContent } from './breaking-news.interface';
import { ContentstackService } from '@shared/aws-integration';

@Component({
  selector: 'ria-breaking-news',
  templateUrl: './breaking-news.component.html',
  styleUrls: ['./breaking-news.component.scss']
})
export class BreakingNewsComponent implements OnInit {
  @Input() brand: string;
  contentType = 'news';
  environment = 'dev';
  public testNewsAPIData: BreakingNewsContent[] = [];
  constructor(private contentStackService: ContentstackService) {}

  ngOnInit(): void {
    this.callContentStackAPI(this.brand, this.contentType, this.environment);
  }
  public callContentStackAPI(brand, contentType, environment): void {
    this.contentStackService.getEntry(brand, contentType, environment).subscribe((res) => {
      this.testNewsAPIData = res;
    });
  }
}
