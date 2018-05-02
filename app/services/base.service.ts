import { Router } from "@angular/router";
import { Injectable } from "@angular/core";

@Injectable()
export class BaseService {

	dev: boolean = true;
	private static pageStack: Array<Object> = [];
	private static data: Object = {};

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

	isset(key: string | number) {
		return	typeof BaseService.data[key] !== 'undefined' &&
				BaseService.data[key] !== null &&
				Object.keys(BaseService.data[key]).length !== 0;
	}

	getData(key: string | number) {
		return BaseService.data[key];
	}

	setData(key: string | number, value: any) {
		BaseService.data[key] = value;
	}

	delData(key: string | number) {
		delete BaseService.data[key];
	}
}
