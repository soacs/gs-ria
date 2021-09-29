export const Vendors = {
  qa: {
    bondnav: {
      url:
        'https://idfs-qa.gs.com/idp/startSSO.ping?PartnerSpId=https%3A%2F%2Fbondnav.staging.280cap.net&IdpAdapterId=OtaFolio&TargetResource=https://bondnav.staging.280cap.net/market/muni',
      id: 'bondnav'
    },
    capelogic: {
      url: 'https://idfs-qa.gs.com/idp/startSSO.ping?PartnerSpId=https%3A%2F%2Fqa.capelogic.com%2F',
      id: 'capelogic'
    }
  },
  prod: {
    bondnav: {
      url:
        'https://idfs.gs.com/idp/startSSO.ping?PartnerSpId=https%3A%2F%2Fwww.bondnav.com&IdpAdapterId=OtaFolio&TargetResource=https://bondnav.com/market/muni',
      id: 'bondnav'
    },
    capelogic: {
      url: 'https://idfs.gs.com/idp/startSSO.ping?PartnerSpId=https%3A%2F%2Fwww.capelogic.com',
      id: 'capelogic'
    }
  }
};
