import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';

import { DataserviceService } from 'src/app/services/dataservice.service';
import {BookingComponent} from "src/app/components/booking/booking.component"

import{ MatDialog } from '@angular/material/dialog'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor( private dataservice :DataserviceService,public dialog : MatDialog ) { }

  movies = this.dataservice.getalldata().movies
  theaters = this.dataservice.getalldata().theatre

  ngOnInit(): void {
  }
  movieselecte(movie:any){
    this.dataservice.setselectedMovie(movie)
    let dialogRef = this.dialog.open(BookingComponent)
    dialogRef.afterClosed().subscribe(result=>{
      console.log(result)
    })
  }

}
