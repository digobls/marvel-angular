import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})

export class ApiHttpService {
  constructor(
    private readonly http: HttpClient,
    private readonly router: Router
  ) { }
  isShowingError = false;

  BASE_AUTH_HEADERS = {
    'Content-Type': 'application/json',
  };

  BASE_REQUEST_OPTIONS = {
    headers: new HttpHeaders(this.BASE_AUTH_HEADERS),
  };

  public get(url: string): Observable<any> {
    return this.http.get(url);
  }

}
