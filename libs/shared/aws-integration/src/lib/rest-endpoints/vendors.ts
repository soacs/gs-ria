export const vendors = {
  bondnavsso: {
    get: (memberOid, vendorId) => `/vendors/sso?memberOid=${memberOid}&vendor=${vendorId}`
  }
};
