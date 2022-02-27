import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PhotoBlockComponent } from './photo-block/photo-block.component';
import { PlaceOfApartmentsComponent } from './place-of-apartments/place-of-apartments.component';
import { BodyPhotoComponent } from './body-photo/body-photo.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PhotoBlockComponent,
    PlaceOfApartmentsComponent,
    BodyPhotoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
