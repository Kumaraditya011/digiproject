import { Component, OnInit } from '@angular/core';
import{HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  private baseUrl = 'https://projcba.herokuapp.com/';

  constructor(private q: HttpClient) { }

  ngOnInit() {
  }
  sendData(ud){
    
    this.q.post(this.baseUrl + '/adduser', ud.value).subscribe();

  }
}
