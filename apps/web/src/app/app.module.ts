import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import {
  InputTextModule,
  PasswordModule,
  ButtonModule,
  DataTableModule,
  SharedModule,
  ContextMenuModule
} from 'primeng/primeng';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from './views/login/login.component';
import { SubularBrandComponent } from './components/subular-brand/subular-brand.component';

import { LOCALSTORAGE_SERVICE } from './providers/localstorage.service';
import { SubularAppComponent } from './views/subular-app/subular-app.component';
import { RandomAlbumsComponent } from './views/subular-app/random-albums/random-albums.component';
import { HttpClientModule } from '@angular/common/http';
import { SubularCoreModule } from '@Subular/core';
import { ArtistListComponent } from './components/artist-list/artist-list.component';
import { PlayerComponent } from './components/player/player.component';
import { AlbumsComponent } from './views/subular-app/albums/albums.component';
import { AlbumCardComponent } from './components/album-card/album-card.component';
import { MD5_SERVICE } from './providers/md5.provider';
import { AlbumComponent } from './views/subular-app/album/album.component';
import { PlayerService } from './services/player.service';
import { GutterComponent } from './components/player/gutter/gutter.component';
import { TrackInfoComponent } from './components/player/track-info/track-info.component';
import { HeartComponent } from './components/player/heart/heart.component';
import { AlbumOptionsComponent } from './views/subular-app/album/album-options/album-options.component';
import { PlaylistListComponent } from './components/playlist-list/playlist-list.component';
import { TypeAndJumpToDirective } from './directives/typeAndJumpTo.directive';
import { PlaylistComponent } from './views/subular-app/playlist/playlist.component';
import { ContextMenuComponent } from './components/context-menu/context-menu.component';
import { RecentlyAddedComponent } from './views/subular-app/recently-added/recently-added.component';

@NgModule({
  declarations: [
    AlbumCardComponent,
    AlbumsComponent,
    AlbumComponent,
    AppComponent,
    ArtistListComponent,
    LoginComponent,
    PlayerComponent,
    RandomAlbumsComponent,
    TypeAndJumpToDirective,
    SubularBrandComponent,
    SubularAppComponent,
    GutterComponent,
    TrackInfoComponent,
    AlbumOptionsComponent,
    HeartComponent,
    PlaylistListComponent,
    PlaylistComponent,
    ContextMenuComponent,
    RecentlyAddedComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    ButtonModule,
    ContextMenuModule,
    DataTableModule,
    InputTextModule,
    HttpClientModule,
    PasswordModule,
    ReactiveFormsModule,
    SharedModule,
    SubularCoreModule.forRoot()
  ],
  providers: [LOCALSTORAGE_SERVICE, MD5_SERVICE, PlayerService],
  bootstrap: [AppComponent]
})
export class AppModule {}
