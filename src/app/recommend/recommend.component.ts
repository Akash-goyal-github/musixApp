import { Component, OnInit } from '@angular/core';
import { SongService } from '../services/song.service';

@Component({
  selector: 'app-recommend',
  templateUrl: './recommend.component.html',
  styleUrls: ['./recommend.component.css']
})
export class RecommendComponent implements OnInit {

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

