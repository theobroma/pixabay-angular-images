import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';
import { ThemeService } from './core/services/theme.service';
import { selectEffectiveTheme } from './reducers/settings/settings.selectors';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isDarkTheme: Observable<boolean>;
  theme$: Observable<string>;

  constructor(private themeService: ThemeService,private store: Store<any>) {
    // Initialization inside the constructor
    this.isDarkTheme =of(false);
    this.theme$=of("LIGHT-THEME");
 }

  // ngOnInit() {
  //   this.isDarkTheme = this.themeService.isDarkTheme;
  // }

  ngOnInit(): void {
    // this.theme$ = this.store.pipe(select(selectTheme));
    this.theme$ = this.store.pipe(select(selectEffectiveTheme)).pipe(
      // tap(val => console.log('Theme: ', val))
    );
  }
}
