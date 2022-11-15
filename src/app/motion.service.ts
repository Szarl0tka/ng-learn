import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders(
    {
      'Content-Type': 'application/json',
    }
  )
};

@Injectable({
  providedIn: 'root'
})
export class MotionService {

  

  constructor(private http: HttpClient) { }

  getMotions(url: string): Observable<object> {
    return this.http.get(url, httpOptions);
  }
}
