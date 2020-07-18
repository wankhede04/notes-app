import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'

import { AppComponent } from './app.component';
import { NgxsModule } from '@ngxs/store';
import { NgxsStoragePluginModule, StorageOption } from '@ngxs/storage-plugin';
import { NgxsRouterPluginModule } from '@ngxs/router-plugin';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin';
import { ngxsConfig } from './store/ngxs.config';
import { environment } from '../environments/environment';

const routes: Routes = [
  { path: '', component: AppComponent },
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes, { initialNavigation: 'enabled' }),
    NgxsModule.forRoot(
      [],
      ngxsConfig),
    NgxsStoragePluginModule.forRoot({
      storage: StorageOption.SessionStorage,
      key: []
    }),
    NgxsRouterPluginModule.forRoot(),
    NgxsReduxDevtoolsPluginModule.forRoot({
      name: 'NOTES_APP',
      disabled: environment.production
    }),
    NgxsLoggerPluginModule.forRoot({
      disabled: environment.production
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
