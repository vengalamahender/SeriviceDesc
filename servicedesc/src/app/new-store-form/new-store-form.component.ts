import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {GetstoreService} from './../getstore.service';
import { Http,Response,Headers,RequestOptions } from '@angular/http';
import {Router} from '@angular/router';
@Component({
  selector: 'app-new-store-form',
  templateUrl: './new-store-form.component.html',
  styleUrls: ['./new-store-form.component.css'],
  providers:[GetstoreService]
})
export class NewStoreFormComponent implements OnInit {

  constructor(private _getstoreservice:GetstoreService,private router:Router) { }

  ngOnInit() {
  
  }
RegisterUser(store){
this._getstoreservice.addStore(store)
.subscribe(data => console.log(data),
          err => console.log(err));
          this.router.navigate(['dashboard']);
}

}
