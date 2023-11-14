import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CarDetailResponse } from '../response/car-detail-response';
import { Observable } from 'rxjs';
import { ModelResponse } from '../response/model-response';
import { CreateCarRequest } from '../request/create-car.request';
import { BrandResponse } from '../response/brand-response';


@Injectable({
  providedIn: 'root'
})
export class CreateCarService {
  private apiUrl = 'http://localhost:2300';

  constructor(private http: HttpClient) {}


  getAllBrand() : Observable<BrandResponse[]>{
    return this.http.get<BrandResponse[]>(`${this.apiUrl}/all`);
  }
  getModelByBrandId(brandId : number) : Observable<ModelResponse[]>{
    return this.http.get<ModelResponse[]>(`${this.apiUrl}/model/${brandId}`);
  }
}


