import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CartComponent } from './components/cart.component';
import { CarDetailComponent } from './car-detail/car-detail.component';
import { FormsModule } from '@angular/forms';
import { CarListComponent } from './car-list/car-list.component';
import { CarSearchComponent } from './car-search/car-search.component';
import { CarInfoComponent } from './car-info/car-info.component';
import { ImageViewerComponent } from './image-viewer/image-viewer.component';


@NgModule({
  declarations: [
    AppComponent,
    CartComponent,
    CarDetailComponent,
    CarListComponent,
    CarSearchComponent,
    CarInfoComponent,
    ImageViewerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
  
})
export class AppModule { }
