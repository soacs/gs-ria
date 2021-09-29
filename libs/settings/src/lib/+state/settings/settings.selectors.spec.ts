/* eslint-disable @nrwl/nx/enforce-module-boundaries */
import { SettingsState } from '@api-interfaces';
import * as SettingsSelectors from './settings.selectors';

describe('Settings Selectors', () => {
  let state;

  const settingsState: SettingsState = {
    brand: 'goldman',
    theme: 'gs-theme',
    themes: [],
    brands: []
  };

  const appState = {
    userProfile: {}
  };

  beforeEach(() => {
    state = {
      app: appState,
      settings: settingsState
    };
  });

  describe('Settings Selectors', () => {
    it('getSettingsLoaded() should return the entire state', () => {
      const getSettingsState = SettingsSelectors.getSettingsState.projector(state);
      expect(getSettingsState).toStrictEqual(state);
    });

    it('getRootState should return the app state', () => {
      const getRootState = SettingsSelectors.getRootState(state);
      expect(getRootState).toStrictEqual(appState);
    });

    it('getState should return the state', () => {
      const getState = SettingsSelectors.getState(state);
      expect(getState).toStrictEqual({
        ...settingsState,
        ...appState
      });
    });

    it('getSettingsLoaded should return the settings state', () => {
      const getSettingsLoaded = SettingsSelectors.getSettingsLoaded(state);

      expect(getSettingsLoaded).toStrictEqual(state.settings);
    });

    it('getSettingsError should return the settings state', () => {
      const getSettingsError = SettingsSelectors.getSettingsError(state);

      expect(getSettingsError).toStrictEqual(state.settings);
    });

    it('getAllSettings should return the current settings state', () => {
      const getAllSettings = SettingsSelectors.getAllSettings(state);

      expect(getAllSettings).toStrictEqual(settingsState);
    });

    it('getSettings should return the Settings state', () => {
      const getSettings = SettingsSelectors.getSettings(state);

      expect(getSettings).toStrictEqual(settingsState);
    });

    it('getSelectedId should return the Settings themes', () => {
      const getSelectedId = SettingsSelectors.getSelectedId(state);

      expect(getSelectedId).toStrictEqual(settingsState.themes);
    });

    it('getBrand should return the Settings brand', () => {
      const getBrand = SettingsSelectors.getBrand(state);

      expect(getBrand).toStrictEqual(settingsState.brand);
    });

    it('getTheme should return the Settings theme', () => {
      const getTheme = SettingsSelectors.getTheme(state);

      expect(getTheme).toStrictEqual(settingsState.theme);
    });
  });
});
