import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';
import { ThemeService } from '../core/services/theme.service';
import { actionSettingsChangeTheme } from '../reducers/settings/settings.actions';
import { selectSettings } from '../reducers/settings/settings.selectors';

@Component({
  selector: 'app-appbar',
  templateUrl: './appbar.component.html',
  styleUrls: ['./appbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppbarComponent implements OnInit {
  title = 'pixabay-angular-images';
  isDarkTheme: Observable<boolean>;
  // settings$: Observable<SettingsState>;
  settings$: Observable<any>;

  themes = [
    { value: 'DEFAULT-THEME', label: 'blue' },
    { value: 'LIGHT-THEME', label: 'light' },
    { value: 'NATURE-THEME', label: 'nature' },
    { value: 'BLACK-THEME', label: 'dark' },
  ];

  constructor(private themeService: ThemeService, private store: Store) {
    // Initialization inside the constructor
    this.isDarkTheme = of(false);
    this.settings$ = of({ theme: 'test' });
    // this.settings$.subscribe(res => console.log(res));
  }

  ngOnInit() {
    this.settings$ = this.store
      .select(selectSettings)
      .pipe(tap((val) => console.log('Settings: ', val)));
    // this.settings$.subscribe(res => console.log(res));
    this.isDarkTheme = this.themeService.isDarkTheme;
  }

  toggleDarkTheme(checked: boolean) {
    this.themeService.setDarkTheme(checked);
  }

  onThemeSelect({ value: theme }: any) {
    this.store.dispatch(actionSettingsChangeTheme({ theme }));
  }
}
