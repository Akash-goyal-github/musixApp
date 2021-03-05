import { Component, OnInit } from '@angular/core';
import { RouterService } from '../services/router.service';

@Component({
  selector: 'app-artist-song',
  templateUrl: './artist-song.component.html',
  styleUrls: ['./artist-song.component.css']
})
export class ArtistSongComponent implements OnInit {

  constructor(private routerservice:RouterService) { }

  ngOnInit(): void {
  }
  goToAlbum(){
    this.routerservice.routeToAlbumView();

  }
  goToCountry(){
    this.routerservice.routeToVideoSongView();

  }
}
