import * as AppActions from './app.actions';
import { initialState, appReducer } from './app.reducer';

describe('App Reducer', () => {
  describe('valid app actions', () => {
    it('loadSettingsSuccess should return set the list of known app profile', () => {
      const action = AppActions.loadAppSuccess({
        app: {
          userProfile: {}
        }
      });

      const result = appReducer(initialState, action);

      expect(result).toStrictEqual({ userProfile: {} });
    });

    it('loadSettingsSuccess should return set the state with error', () => {
      const action = AppActions.loadAppFailure({
        error: {
          message: 'Failled to get data'
        }
      });

      const result = appReducer(initialState, action);

      expect(result).toStrictEqual({
        userProfile: {},
        error: {
          message: 'Failled to get data'
        }
      });
    });
  });
});
