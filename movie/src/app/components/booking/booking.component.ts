import { Component, OnInit } from '@angular/core';
import { DataserviceService } from 'src/app/services/dataservice.service';
import * as _ from 'lodash';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss']
})
export class BookingComponent implements OnInit {

  constructor( public dataservice:DataserviceService) { }
  data = ''
  selectedTheater={}
  seats:any
  rows:any=Array(10)
  colums:any= Array(10)
  showSelected=false
  selectedMovie = this.dataservice.getselectedMovie()
  theaters = this.dataservice.getalldata().theatre
  shows:any ={
  }
  book(){
    this.showSelected = false
  }
  showSelect(movie,place,showKey){
    this.showSelected = true
  }
  ngOnInit(): void {
    var seatsArr:any = []
    var i = 1
    _.forEach(this.rows,(row,r)=>{
      _.forEach(this.colums,(column,c)=>{
        seatsArr.push({
          'row':r,
          'colum':c,
          'seat':i,
          'selected':false
        })
        i++
      })
    })
    this.seats = seatsArr
    console.log(this.seats)
    let sh = this.shows
    _.forEach(this.theaters,(value:any,key:any)=>{
      let tempshow:any=[]
      _.forEach(value,(theObj:any,ke:any)=>{
        if(ke.includes("show")){
            if(theObj === this.selectedMovie.movie_name){
              let time:any = ke.replace('movie','time')
              tempshow.push(time)
            }
            // Object.assign(this.shows,{
            //   value.theatre_name : tempshow
            // })
        }
        
      })
      sh[value.theatre_name] = tempshow
    })
    this.shows = sh
    console.log(this.shows)
  }

}
