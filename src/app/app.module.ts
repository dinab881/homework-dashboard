import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { WidgetService } from './widget.service';
import { HttpClientModule } from '@angular/common/http';
import { NavComponent } from './nav/nav.component';
import { BannerComponent } from './banner/banner.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { TableComponent } from './table/table.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { SliderComponent } from './slider/slider.component';
import { MediaComponent } from './media/media.component';
import { CarouselComponent } from './carousel/carousel.component';
import { PictureComponent } from './picture/picture.component';
import { GalleryComponent } from './gallery/gallery.component';
import { AppRoutingModule } from './app-routing.module';




@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
   NavComponent,
    BannerComponent,
    StatisticsComponent,
    TableComponent,
    TestimonialsComponent,
    SliderComponent,
    MediaComponent,
    CarouselComponent,
    PictureComponent,
    GalleryComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
      AppRoutingModule

  ],
  providers: [WidgetService],
  bootstrap: [AppComponent],
  entryComponents: [
    NavComponent,
    BannerComponent,
    StatisticsComponent,
    TableComponent,
    TestimonialsComponent,
    SliderComponent,
    MediaComponent,
    CarouselComponent,
    PictureComponent,
    GalleryComponent
  ]
})
export class AppModule { }
