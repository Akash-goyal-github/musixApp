import { Component, OnInit } from '@angular/core';
import { RouterService } from '../services/router.service';

@Component({
  selector: 'app-album-song',
  templateUrl: './album-song.component.html',
  styleUrls: ['./album-song.component.css']
})
export class AlbumSongComponent implements OnInit {

  constructor(private routerservice:RouterService) { }

  ngOnInit(): void {
  }
  goToArtist(){
    this.routerservice.routeToArtistView();

  }
  goToCountry(){
    this.routerservice.routeToVideoSongView();

  }

}
