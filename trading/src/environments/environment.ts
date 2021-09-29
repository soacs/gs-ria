import { Vendors } from './vendors';

// This file will default to DAP environment.
class Environment {
  production: boolean;
  baseUrl: string;
  baseUrlInternal: string;
  internal
  s3Url: string;
  vendors;

  constructor() {
    // this.baseUrl = 'https://api.sbxaws.foliofn.com';
    this.baseUrl = 'https://apigw-ext.dapaws.foliofn.com';
    this.baseUrlInternal = 'https://apigw-int.dapaws.foliofn.com';
    this.production = false;
    this.s3Url = 'http://ria-trading.dapaws.foliofn.com';
    this.vendors = Vendors.qa;
  }
}

export const environment = new Environment();
