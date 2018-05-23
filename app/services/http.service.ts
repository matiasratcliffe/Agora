import { Injectable } from "@angular/core";
import { HttpClient, HttpResponse } from "@angular/common/http";
import { Observable } from 'rxjs/Observable';

import { BaseService } from "./base.service";

@Injectable()
export class HttpService {

	private defaultUrl: string;

	constructor(private app: BaseService, private http: HttpClient) { }

	setDefaultUrl(url: string) {
		this.defaultUrl = url;
	}

	post(dic, url: string=this.defaultUrl):Observable<HttpResponse<Object>> {
		this.app.log("HTTP Post: " + url);
		return this.http.post(url, dic, {observe: 'response'});
	}

}
