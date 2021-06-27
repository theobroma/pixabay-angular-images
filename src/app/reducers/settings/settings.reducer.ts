import { createAction, createReducer, on } from "@ngrx/store";
import { actionSettingsChangeTheme } from "./settings.actions";

export interface SettingsState {
  theme:string;
}

export const initialState: SettingsState = {
  theme:"LIGHT-THEME",
};

export const settingsReducer = createReducer(
  initialState,
  on(
    actionSettingsChangeTheme,
    (state, action) => ({ ...state, ...action })
  ),
);
