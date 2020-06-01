import { Injectable } from '@angular/core';
import { HttpHeaders, HttpParams, HttpClient } from '@angular/common/http';
import{Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContentGetPostService {

  constructor( private http:HttpClient) { }

  GetFileContent(){

    let header = new HttpHeaders();
    header.append('Content-type', 'application/json');
    let param = new HttpParams();
   
    return this.http.get("http://localhost:8080/", { headers: header, params: param});
  
  }

  updateFileContents(data): Observable<any> {
    return this.http.post<any>('http://localhost:8080/edit', data)
  }


}
