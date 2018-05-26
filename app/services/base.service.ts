import { Router, ActivatedRoute } from "@angular/router";
import { Injectable } from "@angular/core";

@Injectable()
export class BaseService {

	private static dev: boolean = true;
	private static data: Object = {};
	public static navbar: boolean = false;
	
	public params;


	constructor(private router: Router, private activatedRoute: ActivatedRoute) { 
		this.activatedRoute.params.subscribe(
			(params) => {
				this.params = params;
			}
		);
	}

	goto(location: string, params: Array<any> = []) {
		this.log("going to " + location);
		this.log(String([location, ...params]));
		this.router.navigate([location, ...params]);
	}

	log(message: string) {
		if (BaseService.dev) {
			console.log('[DEV] ' + message);
		}
	}

	error(message: string) {
		if (BaseService.dev) {
			console.error('[DEV] ' + message);
		}
	}

	isset(key: string | number) {
		return	typeof BaseService.data[key] !== 'undefined' &&
				BaseService.data[key] !== null &&
				Object.keys(BaseService.data[key]).length !== 0;
	}

	getData(key: string | number) {
		if (this.isset(key)) {
			return BaseService.data[key];
		}
	}

	setData(key: string | number, value: any) {
		BaseService.data[key] = value;
	}

	delData(key: string | number) {
		if (this.isset(key)) {
			delete BaseService.data[key];
		}
	}
}
