import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ThemeService } from '../core/services/theme.service';

@Component({
  selector: 'app-appbar',
  templateUrl: './appbar.component.html',
  styleUrls: ['./appbar.component.scss']
})
export class AppbarComponent implements OnInit {
  title = 'pixabay-angular-images';
  isDarkTheme: Observable<boolean>;


  constructor(private themeService: ThemeService) {
    // Initialization inside the constructor
    this.isDarkTheme =of(false);
 }

  ngOnInit() {
    this.isDarkTheme = this.themeService.isDarkTheme;
  }

  toggleDarkTheme(checked: boolean) {
    this.themeService.setDarkTheme(checked);
  }
}
