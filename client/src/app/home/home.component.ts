import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  registerMode = false;

  users: any;

  baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  registerToggle() {
    this.registerMode = true;
  }

  cancelRegisterMode(e) {
    this.registerMode = e
  }

  getUsers() {
    this.http.get(this.baseUrl + 'users').subscribe(users => {
      this.users = users;
    })
  }
}
