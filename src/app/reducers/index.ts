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
}

export const reducers: ActionReducerMap<State> = {
  pictures:picturesReducer
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
