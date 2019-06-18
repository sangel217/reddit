import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewMusicPostComponent } from './new-music-post.component';

describe('NewMusicPostComponent', () => {
  let component: NewMusicPostComponent;
  let fixture: ComponentFixture<NewMusicPostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewMusicPostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewMusicPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
