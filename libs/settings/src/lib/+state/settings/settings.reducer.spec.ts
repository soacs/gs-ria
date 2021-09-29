import * as SettingsActions from './settings.actions';
import { initialState, settingsReducer } from './settings.reducer';

describe('Settings Reducer', () => {
  describe('valid Settings actions', () => {
    it('loadSettingsSuccess should return set the list of known Settings', () => {
      const action = SettingsActions.loadSettingsSuccess({
        settings: {
          themes: []
        }
      });

      const result = settingsReducer(initialState, action);

      expect(result).toStrictEqual({ brand: '', brands: [], theme: '', themes: [] });
    });

    it('should update Brand on should changeBrand', () => {
      const action = SettingsActions.changeBrand({
        brand: 'goldman'
      });

      const result = settingsReducer(initialState, action);

      expect(result).toStrictEqual({ brand: 'goldman', brands: [], theme: '', themes: [] });
    });

    it('should update theme on should changeTheme', () => {
      const action = SettingsActions.changeTheme({
        theme: 'gs-theme'
      });

      const result = settingsReducer(initialState, action);

      expect(result).toStrictEqual({ brand: '', brands: [], theme: 'gs-theme', themes: [] });
    });
  });

  describe('unknown action', () => {
    it('should return the previous state', () => {
      /* eslint-disable  @typescript-eslint/no-explicit-any */
      const action = {} as any;
      const result = settingsReducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });
});
