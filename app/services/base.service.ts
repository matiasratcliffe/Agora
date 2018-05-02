import { Router } from "@angular/router";
import { Injectable } from "@angular/core";

@Injectable()
export class BaseService {

	dev: boolean = true;
	pageStack: Array<Object> = [];

	constructor(private router: Router) { }

	goto(location: string) {
		this.router.navigate([location]);
	}

	log(message: string) {
		if (this.dev) {
			console.log(message);
		}
	}

	error(message: string) {
		if (this.dev) {
			console.error(message);
		}
	}
}
