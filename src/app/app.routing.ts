import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { MusicComponent } from './music/music.component';
import { MusicPostComponent } from './music-post/music-post.component';
import { AdminComponent } from './admin/admin.component';

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
},
{
  path: 'admin',
  component: AdminComponent
}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
