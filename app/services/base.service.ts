import { Injectable } from "@angular/core";
import { Router } from "@angular/router";

@Injectable()
export class BaseService {
	pageStack: Array<Object> = [];

	constructor (private router: Router) {}

	goto(location) {
		this.router.navigate([location]);
	}

}
