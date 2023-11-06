import { UserCreateRequest } from './../request/user-create-request';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SignUpService {
  private apiUrl = 'http://localhost:2300';

  constructor(private http: HttpClient) { }

  postData(userCreateRequest : UserCreateRequest ): Observable<any> {
     return this.http.post(`${this.apiUrl}/CreateUser`,userCreateRequest);
  }

}
