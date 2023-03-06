import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders , HttpParams} from '@angular/common/http'
import * as moment from 'moment';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpserviceService {

  private headeroptions = { headers : new HttpHeaders({
    'Access-Control-Allow-Origin':'*'
  }),
  params:new HttpParams()
}

public movies:any = []
  private getallurl = "https://zincubate.in/api/MovieTicketChecker?action=getAllDetails"
  private getSeaturl = "https://zincubate.in/api/MovieTicketChecker?action=bookSeats"
  private mail = {"user_mail_id":"test1@gmail.com"}
  private bookObj = {
  "show_time":"9:30 AM",
  "movie_name":"KVRK",
  "theatre_name":"Rohini Silver Screens",
  "booked_seats":"[2,3,4,8,9]",
  "date":moment().format('DD/MM/YYYY'),
  "user_mail_id":"test1@gmail.com"
  }
  constructor(private http:HttpClient) { }


  getall(){
    return this.http.post(this.getallurl,this.mail)
  }
  book(value){
    debugger
    this.bookObj["show_time"] = value.show
    this.bookObj["movie_name"] = value.movie
    this.bookObj["theatre_name"] = value.place
    this.bookObj["booked_seats"] = value.seats
    return this.http.post(this.getSeaturl,this.bookObj)
  }
}

