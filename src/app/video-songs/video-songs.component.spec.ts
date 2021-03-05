import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoSongsComponent } from './video-songs.component';

describe('VideoSongsComponent', () => {
  let component: VideoSongsComponent;
  let fixture: ComponentFixture<VideoSongsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VideoSongsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoSongsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
