import { Test, TestingModule } from '@nestjs/testing';

import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let app: TestingModule;
  let appService: AppService;

  beforeAll(async () => {
    app = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService]
    }).compile();

    appService = app.get<AppService>(AppService);
  });

  describe('getData', () => {
    it('should return "profile object"', () => {
      const expectedResult = {
        firstname: 'Joe',
        lastname: 'John',
        email: 'ch123@test.com',
        phone: '7032222222'
      };
      jest.spyOn(appService, 'getData').mockImplementation(() => expectedResult);
      const appController = app.get<AppController>(AppController);
      expect(appController.getData()).toMatchObject(expectedResult);
    });
  });
});
