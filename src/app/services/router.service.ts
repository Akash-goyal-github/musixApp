import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { RouterModule, Routes } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RouterService {

  constructor(private router:Router) { }

  routeToAlbumView() {
    this.router.navigate(['dashboard','AlbumSong']);
  }

  routeToArtistView() {
    this.router.navigate(['dashboard','ArtistSong']);
  }

  routeToVideoSongView(){
    this.router.navigate(['dashboard','VideoSong']);
  }


}
