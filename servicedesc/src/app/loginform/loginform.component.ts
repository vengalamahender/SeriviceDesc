import { Component, OnInit } from '@angular/core';
import {Router } from '@angular/router';
import {LoginService} from '../login.service';
import {GetstoreService} from './../getstore.service';
@Component({
  selector: 'app-loginform',
  templateUrl: './loginform.component.html',
  styleUrls: ['./loginform.component.css'],
  providers:[GetstoreService]
})
export class LoginformComponent implements OnInit {

  constructor(private router:Router,private user:LoginService,private _getstoreservice:GetstoreService) { }
adminuser:{};
  ngOnInit() {
    this._getstoreservice.getAdmin()
  .subscribe((data) =>{
  this.adminuser = data;
  console.log(data);
  });
  }


loginUser(e){
	e.preventDefault();
	console.log(e);
  console.log(this.adminuser);
	var username = e.target.elements[0].value;
	var password = e.target.elements[1].value;
console.log(username,password);
if(username=='admin' && password == 'admin')
this.user.setUserLoggedIn();
this.router.navigate(['dashboard']);
return false;
	}



}
