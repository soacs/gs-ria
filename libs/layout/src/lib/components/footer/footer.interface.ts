/* eslint-disable @typescript-eslint/naming-convention */
export interface FooterConfig {
  footerlinks?: FooterLinks[];
  logo?: { url: string };
  disclaimer?: string;
  policy?: {
    url: string;
    Key: string;
  };
}
interface FooterLinks {
  title: string;
  href: string;
}
