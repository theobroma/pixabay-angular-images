import { Component } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ThemeService } from './core/services/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isDarkTheme: Observable<boolean>;

  constructor(private themeService: ThemeService) {
    // Initialization inside the constructor
    this.isDarkTheme =of(false);
 }

  ngOnInit() {
    this.isDarkTheme = this.themeService.isDarkTheme;
  }
}
