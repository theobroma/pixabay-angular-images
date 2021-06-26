import { createAction, createReducer, on } from "@ngrx/store";
export const clear = createAction('[SETTINGS] clear');

export interface SettingsState {
  theme:string;
}

export const initialState: SettingsState = {
  theme:"light",
};

export const settingsReducer = createReducer(
  initialState,
  on(clear, state => ({
    ...state,
    theme: ""
  }))
);
