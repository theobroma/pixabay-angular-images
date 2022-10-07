import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ImageListComponent } from './image-list/image-list.component';
import { MaterialModule } from './material/material.module';
import { AppbarComponent } from './appbar/appbar.component';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { AppEffects } from './app.effects';
import { DialogContentExampleComponent } from './dialog-content-example/dialog-content-example.component';
import { DialogContentExampleDialogComponent } from './dialog-content-example-dialog/dialog-content-example-dialog.component';
import { PicturesEffects } from './reducers/pictures/pictures.effects';
import { ImageListItemComponent } from './image-list-item/image-list-item.component';

@NgModule({
  declarations: [
    AppComponent,
    ImageListComponent,
    AppbarComponent,
    DialogContentExampleComponent,
    DialogContentExampleDialogComponent,
    ImageListItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FlexLayoutModule,
    MaterialModule,
    StoreModule.forRoot(reducers, {
      metaReducers
    }),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    EffectsModule.forRoot([PicturesEffects,AppEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
