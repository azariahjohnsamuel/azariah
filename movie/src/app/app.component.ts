import { Component, OnInit } from '@angular/core';
import { HttpserviceService } from './services/httpservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'movie';
  constructor(private httpservice: HttpserviceService) {
  }
  ngOnInit(){
    
  }
}
