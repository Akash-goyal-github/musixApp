import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { SongService } from '../services/song.service';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.css']
})
export class FavouritesComponent implements OnInit {

  musics:any;
  player = new Audio;
  searching:any;
  p:number=1;
  panelOpenState = false;
  constructor(private song:SongService) { }

  ngOnInit(): void {
    this.song.getSongs().subscribe(data => {
      this.musics = data;
      console.log(this.musics);
    })
  }
  playSong(audio) {
    this.player.src = audio.previewUrl;
    this.player.play();
  }
  stopSong(audio) {
    this.player.pause();
  }

  //searching
  Searchingfun(){
    if(this.searching=="")
    {
      this.ngOnInit();
    }
    else{
      this.musics=this.musics.filter(res=>{
        return res.trackName.toLocaleLowerCase().match(this.searching.toLocaleLowerCase());
      });
    }
  }


 
  

}
