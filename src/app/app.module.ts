import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataloadComponent } from './components/dataload/dataload.component';
import { AboutComponent } from './components/about/about.component';
import { AdminComponent } from './components/admin/admin.component';
import { ImageDetailsComponent } from './components/image-details/image-details.component';
import { ImageGalleryComponent } from './components/image-gallery/image-gallery.component';
import { ViewRegistrationComponent } from './components/view-registration/view-registration.component';
import { HomeComponent } from './components/home/home.component';

    
@NgModule({
  declarations: [
    AppComponent,
    DataloadComponent,
    AboutComponent,
    AdminComponent,
    ImageDetailsComponent,
    ImageGalleryComponent,
    ViewRegistrationComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
