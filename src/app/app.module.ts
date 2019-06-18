import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';



import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { routing } from './app.routing';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MusicComponent } from './music/music.component';
import { MusicPostComponent } from './music-post/music-post.component';
import { NewMusicPostComponent } from './new-music-post/new-music-post.component';



@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    MusicComponent,
    MusicPostComponent,
    NewMusicPostComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
