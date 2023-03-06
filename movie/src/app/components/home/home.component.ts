import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';

import { DataserviceService } from 'src/app/services/dataservice.service';
import {BookingComponent} from "src/app/components/booking/booking.component"

import{ MatDialog } from '@angular/material/dialog'
import { HttpserviceService } from 'src/app/services/httpservice.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor( private dataservice :DataserviceService,public dialog : MatDialog ,public httpservice: HttpserviceService) { }
data:any
  movies:any 
  theaters:any 
  availablemovies:any=[]
  ngOnInit(): void {
    this.syncAccess()    
  }
  syncAccess() {
    return this.httpservice.getall().subscribe({next:value=> {
      this.data = value
      this.movies = this.data.movies
      this.theaters = this.data.theatre
    }})
}
theaterselecte(theaters){
  Array(4).forEach((element,index) => {
    let key = 'show'+(index+1)+'_movie'
    if(theaters[key]){
      if(!this.availablemovies.includes('theaters[key]')){
        this.availablemovies.push(theaters[key])
      }
    }
  });
  console.log(this.availablemovies)
}
  movieselecte(movie:any){
    this.dataservice.setselectedMovie(movie)
    let dialogRef = this.dialog.open(BookingComponent)
    dialogRef.afterClosed().subscribe(result=>{
    })
  }

}
