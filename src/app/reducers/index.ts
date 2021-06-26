import {
  ActionReducerMap, MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import { picturesReducer, PicturesState } from './pictures/pictures.reducer';
import { settingsReducer, SettingsState } from './settings/settings.reducer';

export interface State {
  pictures:PicturesState;
  settings:SettingsState;
}

export const reducers: ActionReducerMap<State> = {
  pictures:picturesReducer,
  settings:settingsReducer
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
