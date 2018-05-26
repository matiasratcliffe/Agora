import { Component, OnInit } from "@angular/core";
import { BaseService } from "~/services/base.service";
import { Page } from "tns-core-modules/ui/page";

import { User } from "~/model/user.model";

@Component({
	selector: "app-hub",
	templateUrl: "hub.component.html",
	styleUrls: ["hub.component.css"],
	providers: [BaseService]
})
export class HubComponent implements OnInit {

	user: User;

	constructor(private app: BaseService, private page: Page) {
		this.app.log(this.app.params);
		if (app.isset("user"))
			this.user = app.getData("user");
		else
			alert("no u5er found");
	}

	ngOnInit() {
		this.page.actionBarHidden = true;
	}
}
