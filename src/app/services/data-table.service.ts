import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Documents } from '../models/documents';
import { environment } from './../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class DataTableService {
  constructor(private readonly httpClient: HttpClient) {}

  getDataDocuments(): Observable<Documents> {
    return this.httpClient.get<Documents>(environment.api + 'Documents');
  }
}
