import { createFeatureSelector, createSelector } from "@ngrx/store";
import { SettingsState } from "./settings.reducer";

export const selectSettingsState =
  createFeatureSelector<any, SettingsState>('settings');

export const selectSettings = createSelector(
  selectSettingsState,
  (state: SettingsState) => state
);

export const selectTheme = createSelector(
  selectSettings,
  (settings) => settings.theme
);

// export const selectEffectiveTheme = createSelector(
//   selectTheme,
//   selectNightTheme,
//   selectIsNightHour,
//   (theme, nightTheme, isNightHour) =>
//     (isNightHour ? nightTheme : theme).toLowerCase()
// );

export const selectEffectiveTheme = createSelector(
  selectTheme,
  (theme) => theme.toLowerCase()
);
