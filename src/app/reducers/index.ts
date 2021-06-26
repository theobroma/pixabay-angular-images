import { SettingsState, settingsReducer } from './settings';
import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import { PicturesState, picturesReducer } from './pictures';

export interface State {
  pictures:PicturesState
  settings:SettingsState
}

export const reducers: ActionReducerMap<State> = {
  pictures:picturesReducer,
  settings:settingsReducer
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
