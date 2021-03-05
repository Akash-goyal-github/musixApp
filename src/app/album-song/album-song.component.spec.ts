import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbumSongComponent } from './album-song.component';

describe('AlbumSongComponent', () => {
  let component: AlbumSongComponent;
  let fixture: ComponentFixture<AlbumSongComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlbumSongComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlbumSongComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
