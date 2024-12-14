import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ImageUploadService {
  private apiUrl = 'http://localhost:3000/upload-image'; // Backend URL

  constructor(private http: HttpClient) {}

  uploadImage(imageData: string): Observable<any> {
    return this.http.post(this.apiUrl, { imageData });
  }
}
