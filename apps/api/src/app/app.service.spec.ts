import { Test } from '@nestjs/testing';

import { AppService } from './app.service';

describe('AppService', () => {
  let service: AppService;

  beforeAll(async () => {
    const app = await Test.createTestingModule({
      providers: [AppService]
    }).compile();

    service = app.get<AppService>(AppService);
  });

  describe('getData', () => {
    it('should return "profile object"', () => {
      expect(service.getData()).toMatchObject({
        firstname: expect.any(String),
        lastname: expect.any(String),
        email: expect.any(String),
        phone: expect.any(String)
      });
    });
  });
});
