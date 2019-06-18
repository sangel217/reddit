import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { MusicComponent } from './music/music.component';
import { MusicPostComponent } from './music-post/music-post.component';

const appRoutes: Routes = [
{
  path: '',
  component: WelcomeComponent
},
{
  path: 'music',
  component: MusicComponent
},
{
  path: 'posts/:id',
  component: MusicPostComponent
}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
