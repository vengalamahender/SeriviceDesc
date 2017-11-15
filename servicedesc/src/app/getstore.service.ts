import { Injectable } from '@angular/core';
import { Http,Response,Headers,RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class GetstoreService {
private _getUrl = "/api/adminuser";
private _Url = "/api/allstoresdata";
private _postUrl = "/api/store";

  constructor(private _http:Http) { }
getAdmin(){
	return this._http.get(this._getUrl)
	.map((response:Response)=>response.json());
}
getAllStoresData(){
	return this._http.get(this._Url)
	.map((response:Response)=>response.json());
}

addStore(store){
	
	let headers = new Headers({'Content-Type':'application/json'});
	let options = new RequestOptions({headers:headers});
	return this._http.post(this._postUrl, JSON.stringify(store),options)
	.map((response:Response)=> response.json());
}



}
