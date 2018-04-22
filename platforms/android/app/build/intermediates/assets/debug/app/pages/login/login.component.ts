import { Component, OnInit} from "@angular/core";
import { BaseService } from "../../services/base.service";
import { Page } from "tns-core-modules/ui/page";

@Component({
    selector: "app-login",
		templateUrl: "pages/login/login.component.html",
		styleUrls: ["pages/login/login.component.css"],
		providers: [BaseService]
})
export class LoginComponent implements OnInit {

		constructor(private appService: BaseService, private page: Page) { }

    ngOnInit() {
			this.page.actionBarHidden = true;
    }
}
