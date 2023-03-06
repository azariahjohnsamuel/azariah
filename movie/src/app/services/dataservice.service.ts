import { Injectable } from '@angular/core';
import { HttpserviceService } from './httpservice.service';

@Injectable({
  providedIn: 'root'
})
export class DataserviceService {

  alldata:any
  selectedMovie:any
  selectedtheater:any
  selection:any
  constructor(private httpservice: HttpserviceService) { }
      getalldata(){
        return this.alldata
      }
      getselectedMovie(){
        return this.selectedMovie
      }
      setselectedMovie(value:any){
        this.selectedMovie = value
      }
      getselection(){
        return this.selection
      }
      setselection(value:any){
        this.selection = value
      }

    }
