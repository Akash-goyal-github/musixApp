import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountrySongComponent } from './country-song.component';

describe('CountrySongComponent', () => {
  let component: CountrySongComponent;
  let fixture: ComponentFixture<CountrySongComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CountrySongComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CountrySongComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
