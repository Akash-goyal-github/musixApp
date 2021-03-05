import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MainNavComponent } from './main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatListModule } from '@angular/material/list';

import {RouterModule, Routes} from '@angular/router'

import { RouterService } from './services/router.service';
import { FavouritesComponent } from './favourites/favourites.component';
import { RecommendComponent } from './recommend/recommend.component';
import { ProfileComponent } from './profile/profile.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HttpClientModule } from '@angular/common/http';
import { CommentComponent } from './comment/comment.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import {MatExpansionModule} from '@angular/material/expansion';
import { FormsModule} from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { CountrySongComponent } from './country-song/country-song.component';
import { AlbumSongComponent } from './album-song/album-song.component';
import { ArtistSongComponent } from './artist-song/artist-song.component';
import { VideoSongsComponent } from './video-songs/video-songs.component';
import {MatCardModule} from '@angular/material/card';

const routes: Routes=[
  {
    path:'favourites',//path is http:localhost:4200/login
    component:FavouritesComponent
  },
  {
    path:'recommend',//path is http:localhost:4200/login
    component:RecommendComponent
  },
  {
    path:'profile',//path is http:localhost:4200/login
    component:ProfileComponent
  },
  {
    path:'country',//path is http:localhost:4200/login
    component:CountrySongComponent
  },
  {
    path:'dashboard',
    component: DashboardComponent,
   // canActivate: [CanActivateGuard],//either it will return true or false
    //if it is true --> it will allow the navigation
    children:[
      {
        path:'AlbumSong',
        component: AlbumSongComponent
      },
      {
        //for making artist view as default on dashboard page
        path:'',
        component: ArtistSongComponent
      },
      {
        path:'ArtistSong',
        component: ArtistSongComponent
      },
      {
        path:'VideoSong',
        component:VideoSongsComponent
      }
    ]
  },
  {
    path:'comment',
    component:CommentComponent
  },
  {
    //by default we are opening dashboard
        path:'',
        redirectTo:'dashboard',
        pathMatch:'full'
  }
]

@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    FavouritesComponent,
    RecommendComponent,
    ProfileComponent,
    DashboardComponent,
    CommentComponent,
    CountrySongComponent,
    AlbumSongComponent,
    ArtistSongComponent,
    VideoSongsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatFormFieldModule,
    MatSelectModule,
    LayoutModule,
    MatListModule,
    HttpClientModule,
    Ng2SearchPipeModule,
    RouterModule.forRoot(routes),
    FormsModule,
    NgxPaginationModule,
    MatExpansionModule,
    MatCardModule
  ],
  providers: [RouterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
