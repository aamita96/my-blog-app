import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MainService {

  constructor(private http: HttpClient) { }

  getAllCategories() {
    return this.http.get('assets/categories.json');
  }

  getBlogByCategory(): Observable<any> {
    return this.http.get('assets/blog-list.json');
  }
}

