import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Song } from '../Song';

@Injectable({
  providedIn: 'root'
})
export class SongService {

  constructor(private httpclient:HttpClient) { }
  getSongs(): Observable<Array<Song>> {
    return this.httpclient.get<Array<Song>>('http://localhost:3000/songs');
  }


}
