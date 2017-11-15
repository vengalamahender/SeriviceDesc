import { Component, OnInit } from '@angular/core';
import {LoginService} from '../login.service';
import {Router } from '@angular/router';
import {GetstoreService} from './../getstore.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers:[GetstoreService]
})
export class HeaderComponent implements OnInit {

  constructor(private myauthService: LoginService,private router:Router,
  private _getstoreservice:GetstoreService) {}

  ngOnInit() {

  }
   goLogin(){
  this.router.navigate(['login']);
  }
  goHome(){
  this.router.navigate(['home']);
  }
  goAbout(){
  	this.router.navigate(['aboutus']);
  }
}
