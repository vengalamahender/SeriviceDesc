import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {GetstoreService} from './../getstore.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers:[GetstoreService]
  
})
export class DashboardComponent implements OnInit {

  constructor(private router:Router,private  _getstoreservice:GetstoreService) { }
stores:{};
  ngOnInit() {

  this._getstoreservice.getAllStoresData()
.subscribe((data) =>{
  this.stores = data;
  console.log(data);

  });





  }
  goSearch(){
  this.router.navigate(['new-store-form']);
  }
}
