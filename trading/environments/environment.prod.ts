import { Vendors } from './vendors';

class Environment {
  production: boolean;
  baseUrl: string;
  baseUrlInternal: string;
  s3Url: string;
  bondNavUrl: string;
  vendors;

  constructor() {
    let environment = window['folioIFA'].environment;
    switch (environment) {
      case 'dap': {
        this.production = false;
        this.baseUrl = 'https://apigw-ext.dapaws.foliofn.com';
        this.s3Url = 'https://ria-trading.dapaws.foliofn.com';
        this.baseUrlInternal = 'https://apigw-int.dapaws.foliofn.com';
        this.vendors = Vendors.qa;
        break;
      }
      case 'eap': {
        this.production = false;
        this.baseUrl = 'https://apigw-ext.eapaws.foliofn.com';
        this.s3Url = 'https://ria-trading.eapaws.foliofn.com';
        this.baseUrlInternal = 'https://apigw-int.eapaws.foliofn.com';
        this.vendors = Vendors.qa;
        break;
      }
      case 'uat': {
        this.production = true;
        this.baseUrl = 'https://apigw-ext.uataws.foliofn.com';
        this.s3Url = 'https://ria-trading.uataws.foliofn.com';
        this.baseUrlInternal = 'https://apigw-int.uataws.foliofn.com';
        this.vendors = Vendors.qa;
        break;
      }
      case 'prod': {
        this.production = true;
        this.baseUrl = 'https://apigw-ext.prodaws.foliofn.com';
        this.s3Url = 'https://ria-trading.prodaws.foliofn.com';
        this.baseUrlInternal = 'https://apigw-int.prodaws.foliofn.com';
        this.vendors = Vendors.prod;
        break;
      }
      default: {
        this.production = true;
        this.baseUrl = 'https://api.sbxaws.foliofn.com';
        this.s3Url = 'http://ria-fixed-income.sbxaws.foliofn.com';
        this.baseUrlInternal = 'https://apigw-int.dapaws.foliofn.com';
        break;
      }
    }
  }
}

export const environment = new Environment();
