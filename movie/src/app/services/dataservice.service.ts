import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataserviceService {

  alldata = {
    "theatre": [
      {
        "theatre_name": "Gokulam Cinemas",
        "thumbnail_url":
          "https://lh3.googleusercontent.com/p/AF1QipMrgKxJIQkJKXyvOoBjqXuPpVYqupxwMMOjuQtU=s1360-w1360-h1020",
        "customer_rating": 4.8,
        "website": "http://gokulamcinemas.com/",
        "address": "795C, Old Sundar Theatre Complex,Trunk Road, Poonamallee, Rukmani Nagar, Poonamallee,Chennai, Tamil Nadu 600056",
        "show1_time": "9:30 AM",
        "show1_movie": "Love Today",
        "show2_time": "12:30 PM",
        "show2_movie": "777 Charlie",
        "show3_time": "3:00 PM",
        "show3_movie": "Love Today",
        "show4_time": "6:30 PM",
        "show4_movie": "777 Charlie",
        "booked_seats": [
          {
            "date": "21/12/2022",
            "show1_time": "9:30 AM",
            "show1_booked_seats": "[7,8,14]"
          },
          {
            "date": "23/12/2022",
            "show1_time": "9:30 AM",
            "show1_booked_seats": "[7,8,14]"
          },
          {
            "date": "25/12/2022",
            "show1_time": "9:30 AM",
            "show1_booked_seats": "[2, 6, 9, 15, 16, 18]"
          }
        ]
      },
      {
        "theatre_name": "Gokulam Cinemas1",
        "thumbnail_url":
          "https://lh3.googleusercontent.com/p/AF1QipMrgKxJIQkJKXyvOoBjqXuPpVYqupxwMMOjuQtU=s1360-w1360-h1020",
        "customer_rating": 4.8,
        "website": "http://gokulamcinemas.com/",
        "address": "795C, Old Sundar Theatre Complex,Trunk Road, Poonamallee, Rukmani Nagar, Poonamallee,Chennai, Tamil Nadu 600056",
        "show1_time": "9:30 AM",
        "show1_movie": "Love Today",
        "show2_time": "12:30 PM",
        "show2_movie": "777 Charlie",
        "show3_time": "3:00 PM",
        "show3_movie": "Love Today",
        "show4_time": "6:30 PM",
        "show4_movie": "777 Charlie",
        "booked_seats": [
          {
            "date": "21/12/2022",
            "show1_time": "9:30 AM",
            "show1_booked_seats": "[7,8,14]"
          },
          {
            "date": "23/12/2022",
            "show1_time": "9:30 AM",
            "show1_booked_seats": "[7,8,14]"
          },
          {
            "date": "25/12/2022",
            "show1_time": "9:30 AM",
            "show1_booked_seats": "[2, 6, 9, 15, 16, 18]"
          }
        ]
      },
      {
        "theatre_name": "Gokulam Cinemas2",
        "thumbnail_url":
          "https://lh3.googleusercontent.com/p/AF1QipMrgKxJIQkJKXyvOoBjqXuPpVYqupxwMMOjuQtU=s1360-w1360-h1020",
        "customer_rating": 4.8,
        "website": "http://gokulamcinemas.com/",
        "address": "795C, Old Sundar Theatre Complex,Trunk Road, Poonamallee, Rukmani Nagar, Poonamallee,Chennai, Tamil Nadu 600056",
        "show1_time": "9:30 AM",
        "show1_movie": "Love Today",
        "show2_time": "12:30 PM",
        "show2_movie": "777 Charlie",
        "show3_time": "3:00 PM",
        "show3_movie": "Love Today",
        "show4_time": "6:30 PM",
        "show4_movie": "777 Charlie",
        "booked_seats": [
          {
            "date": "21/12/2022",
            "show1_time": "9:30 AM",
            "show1_booked_seats": "[7,8,14]"
          },
          {
            "date": "23/12/2022",
            "show1_time": "9:30 AM",
            "show1_booked_seats": "[7,8,14]"
          },
          {
            "date": "25/12/2022",
            "show1_time": "9:30 AM",
            "show1_booked_seats": "[2, 6, 9, 15, 16, 18]"
          }
        ]
      }
    
    ],
    "movies": [
      {
      "release_date": "November 4, 2022",
      "running_time": "2 hours 34 minutes",
      "language": "Tamil",
      "movie_name": "Love Today",
      "thumbnail_url":
      "https://upload.wikimedia.org/wikipedia/en/3/33/Love_Today_2022_poster.jpg","imdb_rating": "8.4","tags": "Comedy,Drama,Romance"
    },
    {
      "release_date": "November 4, 2022",
      "running_time": "2 hours 34 minutes",
      "language": "Tamil",
      "movie_name": "Love Today",
      "thumbnail_url":
      "https://upload.wikimedia.org/wikipedia/en/3/33/Love_Today_2022_poster.jpg","imdb_rating": "8.4","tags": "Comedy,Drama,Romance"
    },
    {
      "release_date": "November 4, 2022",
      "running_time": "2 hours 34 minutes",
      "language": "Tamil",
      "movie_name": "Love Today",
      "thumbnail_url":
      "https://upload.wikimedia.org/wikipedia/en/3/33/Love_Today_2022_poster.jpg","imdb_rating": "8.4","tags": "Comedy,Drama,Romance"
    }
  ]}
  selectedMovie:any
  selectedtheater:any
  constructor() { }
      getalldata(){
        return this.alldata
      }
      getselectedMovie(){
        return this.selectedMovie
      }
      setselectedMovie(value:any){
        this.selectedMovie = value
      }

    }