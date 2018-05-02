import { Injectable } from "@angular/core";
import { HttpClient, HttpResponse } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/catch";
import "rxjs/add/operator/do";
import "rxjs/add/operator/map";
import "rxjs/add/observable/throw";

import { BaseService } from "./base.service";

@Injectable()
export class HttpService {

	private defaultUrl: string;

	constructor(private app: BaseService, private http: HttpClient) { }

	setDefaultUrl(url: string) {
		this.defaultUrl = url;
	}

	post(dic, url=this.defaultUrl) {
		return this.http.post(url, dic)
			.catch((error) => {
				this.app.error("HttpPost errorJson: " + JSON.stringify(error));
				return Observable.throw(error);
			});
	}

	getHeaders() {
		let headers = new Headers();
		headers.append("Content-Type", "application/json");
		return headers;
	}

	/*handleErrors(error: Response) {
		console.log(JSON.stringify(error.json()));
		return Observable.throw(error);
	}*/

}
