import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { AdminComponent } from './components/admin/admin.component';
import { DataloadComponent } from './components/dataload/dataload.component';
import { HomeComponent } from './components/home/home.component';
import { ImageDetailsComponent } from './components/image-details/image-details.component';
import { ImageGalleryComponent } from './components/image-gallery/image-gallery.component';
import { ViewRegistrationComponent } from './components/view-registration/view-registration.component';

const routes: Routes = [
  {
    //localhost:4200/

    path: "",
    component : HomeComponent
    
  },
  {
    //localhost:4200/home
    path: "home",
    component : DataloadComponent
  },
  {
    //localhost:4200/admin
    path: "admin",
    component : AdminComponent
  },
  {
    path: "admin/view/:id",
    component : ViewRegistrationComponent
  },
  {
    //localhost:4200/gallery
    path: "gallery",
    component : ImageGalleryComponent
  },
  {
    path: "gallery/:id",
    component : ImageDetailsComponent
  },
  {
    //localhost:4200/default
    path: "**",
    component : AboutComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
