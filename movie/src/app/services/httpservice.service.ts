import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders , HttpParams} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class HttpserviceService {

  private headeroptions = { headers : new HttpHeaders({
    'Access-Control-Allow-Origin':'*'
  }),
  params:new HttpParams()
}


  private getallurl = "https://zincubate.in/api/MovieTicketChecker?action=getAllDetails"
  private getSeaturl = "https://zincubate.in/api/MovieTicketChecker?action=bookSeats"
  constructor(private http:HttpClient) { }

  getall(){
    this.headeroptions.params.append("user_mail_id","azariahjohnsamuel@gmail.com")
    console.log(this.http.get(this.getallurl,this.headeroptions).subscribe(value=>{
      return value
    }))
  }

}
