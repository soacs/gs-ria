import { Role } from './role';

export class UserProfile {
  accreditedInvestorAnnualIncome: boolean;
  accreditedInvestorNetWorth: boolean;
  advisorLoginId: string;
  annualIncome: string;
  citizenship: string;
  creationDate: string;
  dateOfBirth: string;
  dayTelephone: string;
  dependentCount: number;
  directorOrTenPercentShareholder: boolean;
  directorOrTenPercentShareholderCompany: [string];
  email1: string;
  email2: string;
  employerName: string;
  employmentStatus: string;
  eveningTelephone: string;
  finraAffiliated: boolean;
  firmOid: string;
  finraCompany: string;
  firstName: string;
  lastName: string;
  liquidNetWorth: number;
  loginId: string;
  memberOid: string;
  membershipType: string;
  occupationType: string;
  partnerCode: string;
  previousExperienceSector: string;
  previousPrivatePlacementExperience: boolean;
  residenceCountry: string;
  tid: string;
  transState: string;
  usename: string;
  partnerCodeRoles: Array<Role>;
  primaryMailingAddress: MailingAddress;
  secondaryMailingAddress: MailingAddress;
  memberProfileItems: MemberProfileItems;
  role: Role;
  accessToken?: string;
  isloggedIn: boolean;

  constructor(loginId: string, accessToken: string) {
    this.loginId = loginId;
    this.accessToken = accessToken;
  }
}

export interface MailingAddress {
  city: string;
  country: string;
  line1: string;
  state: string;
  zipcode: string;
}

export interface MemberProfileItems {
  topMarginalTaxBracket: string;
  maritalStatus: string;
}
