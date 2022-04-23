import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlbumComponent } from './Pages/album/album.component';
import { ContactComponent } from './Pages/contact/contact.component';
import { HomeComponent } from './Pages/home/home.component';

const routes: Routes = [
  {path: '', component:HomeComponent},
  {path: 'Contact', component:ContactComponent},
  {path: 'Gallery', component:AlbumComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
