import { HttpClient, HttpHandler, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

const httpOptions = {
  headers : new HttpHeaders({'Content-Type':'application/json'})
}

@Injectable({
  providedIn: 'root'
})

export class BikeService {

  constructor(private httpClient : HttpClient) {
   }

   getBikes(){
     return this.httpClient.get("server/api/v1/bikes/");
   }

   getBikeWithId(id : any){
    return this.httpClient.get("server/api/v1/bikes/"+id);
   }

   //este metodo insertara un registro en la base SQLite de nuestra api rest
   //POST localhost:9090/api/v1/bikes
   createdBikeRegistration(bike:any){
    return this.httpClient.post('/server/api/v1/bikes',bike,httpOptions );
   }
}
