import { Component, OnInit } from '@angular/core';
import { AppFacade } from './+state/app.facade';
import { DeviceDetectorService } from 'ngx-device-detector';
import { NGXLogger } from 'ngx-logger';

@Component({
  selector: 'ria-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private logger: NGXLogger, private deviceDetector: DeviceDetectorService, private appFacade: AppFacade) {}

  ngOnInit() {
    this.printUserAgent();
    // Below log is just a sample for reference. It should be removed once used in the application.
    this.logger.info('Sample log message: In App Component');

    this.appFacade.loaded$.subscribe((state) => {
      if (state.userProfile) {
        console.log('app inital params', state);
      }
    });
  }

  printUserAgent() {
    console.log('Device info log: ', this.deviceDetector.getDeviceInfo());
  }
}
