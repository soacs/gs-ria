import * as AppSelectors from './app.selectors';

describe('App Selectors', () => {
  let state;

  beforeEach(() => {
    state = {
      app: {
        userProfile: {}
      }
    };
  });

  describe('App Selectors', () => {
    it('getAppState() should return the current loaded status', () => {
      const result = AppSelectors.getAppLoaded(state);

      expect(result).toStrictEqual({ userProfile: {} });
    });

    it('getAppLoaded() should return the current error state', () => {
      const result = AppSelectors.getAppState(state);

      expect(result).toStrictEqual({ userProfile: {} });
    });

    it('getAppError() should return the current error state', () => {
      const result = AppSelectors.getAppState(state);

      expect(result).toStrictEqual({ userProfile: {} });
    });
  });
});
