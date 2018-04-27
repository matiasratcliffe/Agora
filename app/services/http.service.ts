import { Injectable } from "@angular/core";
import { Http, Headers, Response } from "@angular/http";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/catch";
import "rxjs/add/operator/do";
import "rxjs/add/operator/map";
import "rxjs/add/observable/throw";

@Injectable()
export class HttpService {

	constructor(private http: Http) { }

	post(url, dic) {
		return this.http.post(
			url,
			JSON.stringify(dic),
			{ headers: new Headers() }
		).catch(this.handleErrors);
	}

	/*getCommonHeaders() {
		let headers = new Headers();
		headers.append("Content-Type", "application/json");
		headers.append("Authorization", Config.authHeader);
		return headers;
	}*/

	handleErrors(error: Response) {
		console.log(JSON.stringify(error.json()));
		return Observable.throw(error);
	}

}
