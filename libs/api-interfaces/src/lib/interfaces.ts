export interface AccountProfile {
  firstname: string;
  lastname: string;
  email: string;
  phone: string;
}

export interface RiaAppState {
  /* eslint-disable  @typescript-eslint/no-explicit-any */
  userProfile: any;
}
export interface SettingsState {
  brand: string;
  theme: string;
  brands: string[];
  themes: string[];
}
