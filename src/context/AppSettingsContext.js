import CreateDataContext from './CreateDataContext';
import { getAsyncStorage, setAsyncStorage } from '../helpers/AsyncStorageHelper';
import AsyncKeys from '../constants/AsyncKeys';
import {
  appFontSizes, appGeneralInfo, appLanguages, appThemes,
} from '../constants/DefaultVariables';

const appSettingsReducer = (state, action) => {
  switch (action.type) {
    case 'setAppSettings':
      return { ...state, [action.payload.key]: action.payload.value }
    default:
      return state
  }
}

const setAppSettings = (dispatch) => async (key, value) => {
  const appSettings = await getAsyncStorage(AsyncKeys.APP_SETTINGS);
  await setAsyncStorage(AsyncKeys.APP_SETTINGS, { ...appSettings, [key]: value })
  dispatch({ type: 'setAppSettings', payload: { key, value } });
}
export const { Provider: AppSettingsProvider, Context: AppSettingsContext } = CreateDataContext(
  appSettingsReducer,
  {
    setAppSettings,
  },
  {
    app_language: appLanguages[0],
    app_theme: appThemes[0],
    app_font_size: appFontSizes[0],
    app_info: appGeneralInfo,
  },

);
