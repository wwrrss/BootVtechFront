import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';


@Injectable()
export class NetworkService {
  headers:HttpHeaders;
  baseUrl = "http://localhost:8080/";
  constructor(private http:HttpClient) {
    this.headers = new HttpHeaders();
    this.headers = this.headers.append("Authorization", "Basic " + btoa("wwrrss@gmail.com:123456"));
  }

  get(entity:String){
    return this.http.get(this.baseUrl+entity,{headers: this.headers});
  }

  post(entity:String,objeto:any){
    return this.http.post(this.baseUrl+entity,objeto,{headers: this.headers});
  }
  delete(entity:String,id:any){

    return this.http.delete(this.baseUrl+entity+id,{headers: this.headers})
  }

}
