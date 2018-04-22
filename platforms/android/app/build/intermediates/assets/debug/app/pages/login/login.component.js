"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var base_service_1 = require("../../services/base.service");
var page_1 = require("tns-core-modules/ui/page");
var user_model_1 = require("../../model/user.model");
var LoginComponent = /** @class */ (function () {
    function LoginComponent(appService, page) {
        this.appService = appService;
        this.page = page;
        this.isLoggingIn = true;
        this.user = new user_model_1.User();
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.page.actionBarHidden = true;
    };
    LoginComponent.prototype.submit = function () {
        if (this.isLoggingIn) {
            this.login();
        }
        else {
            this.signUp();
        }
    };
    LoginComponent.prototype.login = function () {
    };
    LoginComponent.prototype.signUp = function () {
    };
    LoginComponent.prototype.toggleDisplay = function () {
        this.isLoggingIn = !this.isLoggingIn;
    };
    LoginComponent = __decorate([
        core_1.Component({
            selector: "app-login",
            templateUrl: "pages/login/login.component.html",
            styleUrls: ["pages/login/login.component.css"],
            providers: [base_service_1.BaseService]
        }),
        __metadata("design:paramtypes", [base_service_1.BaseService, page_1.Page])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG9naW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBQ2xELDREQUEwRDtBQUMxRCxpREFBZ0Q7QUFFaEQscURBQThDO0FBUTlDO0lBS0Usd0JBQW9CLFVBQXVCLEVBQVUsSUFBVTtRQUEzQyxlQUFVLEdBQVYsVUFBVSxDQUFhO1FBQVUsU0FBSSxHQUFKLElBQUksQ0FBTTtRQUYvRCxnQkFBVyxHQUFHLElBQUksQ0FBQztRQUdsQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksaUJBQUksRUFBRSxDQUFDO0lBQ3hCLENBQUM7SUFFQyxpQ0FBUSxHQUFSO1FBQ0QsSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDO0lBQ2hDLENBQUM7SUFFSCwrQkFBTSxHQUFOO1FBQ0UsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7WUFDckIsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ2YsQ0FBQztRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ04sSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQ2hCLENBQUM7SUFDSCxDQUFDO0lBRUQsOEJBQUssR0FBTDtJQUNBLENBQUM7SUFFRCwrQkFBTSxHQUFOO0lBRUEsQ0FBQztJQUVELHNDQUFhLEdBQWI7UUFDRSxJQUFJLENBQUMsV0FBVyxHQUFHLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQztJQUN2QyxDQUFDO0lBOUJVLGNBQWM7UUFOMUIsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxXQUFXO1lBQ3ZCLFdBQVcsRUFBRSxrQ0FBa0M7WUFDL0MsU0FBUyxFQUFFLENBQUMsaUNBQWlDLENBQUM7WUFDOUMsU0FBUyxFQUFFLENBQUMsMEJBQVcsQ0FBQztTQUN6QixDQUFDO3lDQU1nQywwQkFBVyxFQUFnQixXQUFJO09BTHBELGNBQWMsQ0ErQjFCO0lBQUQscUJBQUM7Q0FBQSxBQS9CRCxJQStCQztBQS9CWSx3Q0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IEJhc2VTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL2Jhc2Uuc2VydmljZVwiO1xuaW1wb3J0IHsgUGFnZSB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3BhZ2VcIjtcblxuaW1wb3J0IHsgVXNlciB9IGZyb20gXCIuLi8uLi9tb2RlbC91c2VyLm1vZGVsXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcImFwcC1sb2dpblwiLFxuXHRcdHRlbXBsYXRlVXJsOiBcInBhZ2VzL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5odG1sXCIsXG5cdFx0c3R5bGVVcmxzOiBbXCJwYWdlcy9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzXCJdLFxuXHRcdHByb3ZpZGVyczogW0Jhc2VTZXJ2aWNlXVxufSlcbmV4cG9ydCBjbGFzcyBMb2dpbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgICB1c2VyOiBVc2VyO1xuXHRcdGlzTG9nZ2luZ0luID0gdHJ1ZTtcblxuXHRcdGNvbnN0cnVjdG9yKHByaXZhdGUgYXBwU2VydmljZTogQmFzZVNlcnZpY2UsIHByaXZhdGUgcGFnZTogUGFnZSkge1xuXHRcdFx0dGhpcy51c2VyID0gbmV3IFVzZXIoKTtcblx0XHR9XG5cbiAgICBuZ09uSW5pdCgpIHtcblx0XHRcdHRoaXMucGFnZS5hY3Rpb25CYXJIaWRkZW4gPSB0cnVlO1xuICAgIH1cblxuXHRcdHN1Ym1pdCgpIHtcblx0XHRcdCBpZiAodGhpcy5pc0xvZ2dpbmdJbikge1xuXHRcdFx0XHRcdCB0aGlzLmxvZ2luKCk7XG5cdFx0XHQgfSBlbHNlIHtcblx0XHRcdFx0XHQgdGhpcy5zaWduVXAoKTtcblx0XHRcdCB9XG5cdCB9XG5cblx0IGxvZ2luKCkge1xuXHQgfVxuXG5cdCBzaWduVXAoKSB7XG5cblx0IH1cblxuXHQgdG9nZ2xlRGlzcGxheSgpIHtcblx0XHRcdCB0aGlzLmlzTG9nZ2luZ0luID0gIXRoaXMuaXNMb2dnaW5nSW47XG5cdCB9XG59XG4iXX0=