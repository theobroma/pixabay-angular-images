import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';
import { ThemeService } from '../core/services/theme.service';
import { selectSettings } from '../reducers/settings/settings.selectors';

@Component({
  selector: 'app-appbar',
  templateUrl: './appbar.component.html',
  styleUrls: ['./appbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppbarComponent implements OnInit {
  title = 'pixabay-angular-images';
  isDarkTheme: Observable<boolean>;
  // settings$: Observable<SettingsState>;
  settings$: Observable<any>;

  constructor(private themeService: ThemeService,private store: Store<any>) {
    // Initialization inside the constructor
    this.isDarkTheme =of(false);
    this.settings$=of({theme:"test"});
    // this.settings$.subscribe(res => console.log(res));
 }

  ngOnInit() {
    this.settings$ = this.store.pipe(select(selectSettings)).pipe(
      tap(val => console.log('Settings: ', val))
    );
    // this.settings$ = this.store.pipe(select("settings"));
    this.isDarkTheme = this.themeService.isDarkTheme;
    // this.settings$.subscribe(res => console.log(res));
  }

  toggleDarkTheme(checked: boolean) {
    this.themeService.setDarkTheme(checked);
  }
}
