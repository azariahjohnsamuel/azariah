import { Component, OnInit } from '@angular/core';
import { DataserviceService } from 'src/app/services/dataservice.service';
import { HttpClient } from '@angular/common/http';
import * as _ from 'lodash';
import { HttpserviceService } from 'src/app/services/httpservice.service';
import { filter, values } from 'lodash';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss']
})
export class BookingComponent implements OnInit {

  constructor(public dataservice: DataserviceService, private httpservice: HttpserviceService) { }
  data = ''
  selectedTheater = {}
  seats: any
  rows: any = Array(10)
  colums: any = Array(10)
  showSelected = false
  selectedSeats: any = []
  selectedMovie = this.dataservice.getselectedMovie()
  theaters: any = this.syncAccess()
  availabletheater:any
  shows: any = {}
  selection:any
  booked=false
  error=false
  apiselectedseat:any
  bookTicket() {
    this.showSelected = false
    this.httpservice.book(this.selection).subscribe(
      {
        next:values=>{
          let result:any = values
          if(result.message.includes('success')){
            this.booked = true
          }
          else{
            this.error = true
            this.booked = true
          }
        }
      }
    )
  }
  syncAccess() {
    return this.httpservice.getall().subscribe({
      next: value => {
        let data: any = value
        this.theaters = data.theatre
        console.log(this.theaters)
        this.load()
      }
    })

  }
  back(){
    this.booked = false
    this.showSelected = false
  }
  selectseat(value) {
    debugger;
    if (!this.seats[value].selected) {
      this.selectedSeats.push(value + 1)
    }
    else {
      this.selectedSeats.splice(this.selectedSeats.indexOf(value + 1), 1)
    }
    let localselection = this.dataservice.getselection()
    localselection.seats = this.selectedSeats
    this.dataservice.setselection(localselection)
    this.seats[value].selected = !this.seats[value].selected
  }
  showSelect(movie, place, showKey) {
    this.booked =false
    this.selection = {
      'movie':movie,
      'place':place,
      'show':showKey,
      'seats':this.selectedSeats
    }
    this.dataservice.setselection(this.selection)
    this.showSelected = true
  }
  ngOnInit(): void {
  }
  load(){
    var seatsArr: any = []
    var i = 1
    _.forEach(this.rows, (row, r) => {
      _.forEach(this.colums, (column, c) => {

        seatsArr.push({
          'row': r,
          'colum': c,
          'seat': i,
          'selected': false
        })
        i++
      })
    })
    this.seats = seatsArr
    let sh = this.shows
    _.forEach(this.theaters, (value: any, key: any) => {
      let tempshow: any = []
      _.forEach(value, (theObj: any, ke: any) => {
        if (ke.includes("show")) {
          if (theObj === this.selectedMovie.movie_name) {
            let time: any = ke.replace('movie', 'time')
            tempshow.push(time)
          }
        }

      })
      sh[value.theatre_name] = tempshow
    })
    this.shows = sh
    let thea = this.theaters
    let avil = []
    _.forEach(this.shows,(value,key)=>{
      if(value.length>0){
        let fil = thea.find(element => element.theatre_name == key)
        avil.push(fil)
      }
    })
    debugger;
    this.availabletheater = avil
    console.log(this.availabletheater)
  }
}
