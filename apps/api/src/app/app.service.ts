import { AccountProfile } from '@api-interfaces';

import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  profile: AccountProfile = {
    firstname: 'Chris',
    lastname: 'Hudson',
    email: 'ch@test.com',
    phone: '7037771234'
  };

  getData() {
    return this.profile;
  }
}
