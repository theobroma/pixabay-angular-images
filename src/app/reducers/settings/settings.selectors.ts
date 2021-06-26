import { createFeatureSelector, createSelector } from "@ngrx/store";
import { SettingsState } from "./settings.reducer";

export const selectSettingsState =
  createFeatureSelector<any, SettingsState>('settings');

export const selectSettings = createSelector(
  selectSettingsState,
  (state: SettingsState) => state
);
