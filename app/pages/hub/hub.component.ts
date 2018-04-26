import { Component, OnInit} from "@angular/core";
import { BaseService } from "../../services/base.service";
import { Page } from "tns-core-modules/ui/page";

import { User } from "../../model/user.model";

@Component({
	selector: "app-hub",
	templateUrl: "pages/hub/hub.component.html",
	styleUrls: ["pages/hub/hub.component.css"],
	providers: [BaseService]
})
export class HubComponent implements OnInit {

	user: User;

	constructor(private appService: BaseService, private page: Page) {
		this.user = new User();
	}

	ngOnInit() {
		this.page.actionBarHidden = true;
	}
}
