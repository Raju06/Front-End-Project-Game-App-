import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Headers, Response, RequestOptions } from '@angular/http'
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class SearchService {

  private searchurl = "http://172.23.239.180:8080/maverick/search/";

  constructor(private http: HttpClient) { }

  searchHeroes(term: string) {
    return this.http.get(this.searchurl + term);
    //     .map((response:Response)=>{response.json,
    // 	console.log(response)
    // }); 

  }



}
