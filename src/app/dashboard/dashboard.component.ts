import { Component, OnInit, Type } from '@angular/core';
import { WidgetService } from '../widget.service';
import {
    ComponentFactoryResolver,
    ViewContainerRef,
    ViewChild } from '@angular/core';

import { NavComponent } from '../nav/nav.component';
import { BannerComponent } from '../banner/banner.component';
import { StatisticsComponent } from '../statistics/statistics.component';
import { TestimonialsComponent } from '../testimonials/testimonials.component';
import { SliderComponent } from '../slider/slider.component';
import { MediaComponent } from '../media/media.component';
import { CarouselComponent } from '../carousel/carousel.component';
import { PictureComponent } from '../picture/picture.component';
import { GalleryComponent } from '../gallery/gallery.component';



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  sortedWidgets;

  constructor(
      private widgetService: WidgetService,
      private componentFactoryResolver: ComponentFactoryResolver,
      private viewContainerRef: ViewContainerRef
  ) { }

  ngOnInit() {
    //this.loadWidgets();
    this.getWidgets();
    //this.loadWidgets();

  }

  getWidgets(): void {
    this.widgetService.getWidgets()
        .subscribe(widgets => {

          this.loadWidgets(widgets);
        });
  }


  loadWidgets(widgets) {
    const sortedWidgets = widgets.sort((a,b) => a.order > b.order);
    sortedWidgets.forEach(item => {
      let componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.componentTypeMap[item.name]);
      let viewContainerRef = this.viewContainerRef;
      let componentRef = viewContainerRef.createComponent(componentFactory);
      //(<AdComponent>componentRef.instance).data = item.order;
    });

  }




  public componentTypeMap: { [id: string]: Type<{}> } = {
    'NavComponent': NavComponent,
    'BannerComponent': BannerComponent,
    'StatisticsComponent': StatisticsComponent,
    'TestimonialsComponent': TestimonialsComponent,
    'SliderComponent': SliderComponent,
    'MediaComponent': MediaComponent,
    'CarouselComponent': CarouselComponent,
    'PictureComponent': PictureComponent,
    'GalleryComponent': GalleryComponent

  };

}
