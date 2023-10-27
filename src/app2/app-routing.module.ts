import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarListComponent } from './car-list/car-list.component';
import { CarSearchComponent } from './car-search/car-search.component';
import { CarInfoComponent } from './car-info/car-info.component';
import { ImageViewerComponent } from './image-viewer/image-viewer.component';

const routes: Routes = [
  { path: 'car-list', component: CarListComponent },
  { path: 'car-search', component: CarSearchComponent },
  { path: 'car-info/:carId', component: CarInfoComponent},
  {path : 'image-viewer' , component : ImageViewerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})
export class AppRoutingModule {

}
