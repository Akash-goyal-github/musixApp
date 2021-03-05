import { Component, OnInit } from '@angular/core';
import { RouterService } from '../services/router.service';

@Component({
  selector: 'app-country-song',
  templateUrl: './country-song.component.html',
  styleUrls: ['./country-song.component.css']
})
export class CountrySongComponent implements OnInit {

  constructor(private routerservice:RouterService) { }

  ngOnInit(): void {
  }
  goToArtist(){
    this.routerservice.routeToArtistView();

  }
  goToAlbum(){
    this.routerservice.routeToAlbumView();

  }

}
