import { Router } from "@angular/router";
import { Injectable } from "@angular/core";

@Injectable()
export class BaseService {

	pageStack: Array<Object> = [];

	constructor(private router: Router) { }

	goto(location) {
		this.router.navigate([location]);
	}

}
