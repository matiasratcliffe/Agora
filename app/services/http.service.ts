import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';


import { BaseService } from "./base.service";

@Injectable()
export class HttpService {

	private defaultUrl: string;

	constructor(private app: BaseService, private http: HttpClient) { }

	httpOptions = {
		headers: new HttpHeaders({
			'Content-Type':  'application/json',
			'Authorization': 'my-auth-token'
		})
	};

	setDefaultUrl(url: string) {
		this.defaultUrl = url;
	}

	post(dic, url=this.defaultUrl) {
		return this.http.post(url, dic, this.httpOptions);
	}
	
}
