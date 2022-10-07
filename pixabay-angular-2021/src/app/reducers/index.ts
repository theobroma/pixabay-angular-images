import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { environment } from '../../environments/environment';
import { picturesReducer, PicturesState } from './pictures/pictures.reducer';
import { settingsReducer, SettingsState } from './settings/settings.reducer';

export interface AppState {
  pictures: PicturesState;
  settings: SettingsState;
}

export const reducers: ActionReducerMap<AppState> = {
  pictures: picturesReducer,
  settings: settingsReducer,
};

export const metaReducers: MetaReducer<AppState>[] = !environment.production
  ? []
  : [];
