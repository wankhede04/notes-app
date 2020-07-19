import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router'

import { AppComponent } from './app.component';
import { NgxsModule } from '@ngxs/store';
import { NgxsStoragePluginModule, StorageOption } from '@ngxs/storage-plugin';
import { NgxsRouterPluginModule } from '@ngxs/router-plugin';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin';
import { ngxsConfig } from './store/ngxs.config';
import { environment } from '../environments/environment';
import { HomeComponent } from './home/home.component';
import { NoteMetadataComponent } from './note-metadata/note-metadata.component';
import { NoteBoardComponent } from './note-board/note-board.component';
import { NoteOptionsComponent } from './note-options/note-options.component';
import { NoteDetailsState } from './store/notes/notes.state';

const routes: Routes = [
  {
    path: 'notes', component: HomeComponent
  },
  { path: '', component: AppComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NoteMetadataComponent,
    NoteBoardComponent,
    NoteOptionsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes, { initialNavigation: 'enabled' }),
    NgxsModule.forRoot(
      [NoteDetailsState],
      ngxsConfig),
    NgxsStoragePluginModule.forRoot({
      storage: StorageOption.LocalStorage,
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
