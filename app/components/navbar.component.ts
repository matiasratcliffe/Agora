import { Component } from "@angular/core";
import { Page } from "tns-core-modules/ui/page";

import { BaseService } from "~/services/base.service";

import { AppConfig } from "~/model/app.config";

@Component({
	selector: "navbar",
	templateUrl: "navbar.component.html",
	styleUrls: ["navbar.component.css"],
	providers: [BaseService]
})
export class LoginComponent {

	constructor(private app: BaseService, private page: Page) {
	}

	ngOnInit() {
		this.page.actionBarHidden = true;
	}

}
