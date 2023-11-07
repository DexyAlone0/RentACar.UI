import { Component } from '@angular/core';
import { ImageViewerComponent } from '../image-viewer/image-viewer.component';
import { BrandResponse } from '../response/brand-response';
import { ModelResponse } from '../response/model-response';
import { CarDetailService } from '../services/car-detail.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-create-car',
  templateUrl: './create-car.component.html',
  styleUrls: ['./create-car.component.css']
})
export class CreateCarComponent {

  carId : number;
  constructor(private carDetailService: CarDetailService, private activatedRoute : ActivatedRoute)
  {
    this.activatedRoute.params.subscribe(p => {
      this.carId = p["carId"]
    })
  }

  ngOnInit() {
    this.carDetailService.getItemsById(this.carId).subscribe({
      next: (data: CarInfoResponse) => {
        // next
        this.item = data;
        this.imageViewerComponent.showFile(this.item.fileId);
      },
      error: (error) => {
        // error
        console.error('API isteği başarısız:', error);
      },
      complete: () => {
        // complete
      }
    });

  }

}
