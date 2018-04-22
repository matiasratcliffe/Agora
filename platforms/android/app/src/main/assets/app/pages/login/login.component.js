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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG9naW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWlEO0FBQ2pELDREQUEwRDtBQUMxRCxpREFBZ0Q7QUFFaEQscURBQThDO0FBUTlDO0lBS0Usd0JBQW9CLFVBQXVCLEVBQVUsSUFBVTtRQUEzQyxlQUFVLEdBQVYsVUFBVSxDQUFhO1FBQVUsU0FBSSxHQUFKLElBQUksQ0FBTTtRQUYvRCxnQkFBVyxHQUFHLElBQUksQ0FBQztRQUdsQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksaUJBQUksRUFBRSxDQUFDO0lBQ3hCLENBQUM7SUFFQyxpQ0FBUSxHQUFSO1FBQ0QsSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDO0lBQ2hDLENBQUM7SUFFSCwrQkFBTSxHQUFOO1FBQ0UsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7WUFDckIsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ2YsQ0FBQztRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ04sSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQ2hCLENBQUM7SUFDSCxDQUFDO0lBRUQsOEJBQUssR0FBTDtJQUNBLENBQUM7SUFFRCwrQkFBTSxHQUFOO0lBRUEsQ0FBQztJQUVELHNDQUFhLEdBQWI7UUFDRSxJQUFJLENBQUMsV0FBVyxHQUFHLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQztJQUN2QyxDQUFDO0lBOUJVLGNBQWM7UUFOMUIsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxXQUFXO1lBQ3ZCLFdBQVcsRUFBRSxrQ0FBa0M7WUFDL0MsU0FBUyxFQUFFLENBQUMsaUNBQWlDLENBQUM7WUFDOUMsU0FBUyxFQUFFLENBQUMsMEJBQVcsQ0FBQztTQUN6QixDQUFDO3lDQU1nQywwQkFBVyxFQUFnQixXQUFJO09BTHBELGNBQWMsQ0ErQjFCO0lBQUQscUJBQUM7Q0FBQSxBQS9CRCxJQStCQztBQS9CWSx3Q0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0fSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgQmFzZVNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvYmFzZS5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBQYWdlIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvcGFnZVwiO1xuXG5pbXBvcnQgeyBVc2VyIH0gZnJvbSBcIi4uLy4uL21vZGVsL3VzZXIubW9kZWxcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwiYXBwLWxvZ2luXCIsXG5cdFx0dGVtcGxhdGVVcmw6IFwicGFnZXMvbG9naW4vbG9naW4uY29tcG9uZW50Lmh0bWxcIixcblx0XHRzdHlsZVVybHM6IFtcInBhZ2VzL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3NcIl0sXG5cdFx0cHJvdmlkZXJzOiBbQmFzZVNlcnZpY2VdXG59KVxuZXhwb3J0IGNsYXNzIExvZ2luQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICAgIHVzZXI6IFVzZXI7XG5cdFx0aXNMb2dnaW5nSW4gPSB0cnVlO1xuXG5cdFx0Y29uc3RydWN0b3IocHJpdmF0ZSBhcHBTZXJ2aWNlOiBCYXNlU2VydmljZSwgcHJpdmF0ZSBwYWdlOiBQYWdlKSB7XG5cdFx0XHR0aGlzLnVzZXIgPSBuZXcgVXNlcigpO1xuXHRcdH1cblxuICAgIG5nT25Jbml0KCkge1xuXHRcdFx0dGhpcy5wYWdlLmFjdGlvbkJhckhpZGRlbiA9IHRydWU7XG4gICAgfVxuXG5cdFx0c3VibWl0KCkge1xuXHRcdFx0IGlmICh0aGlzLmlzTG9nZ2luZ0luKSB7XG5cdFx0XHRcdFx0IHRoaXMubG9naW4oKTtcblx0XHRcdCB9IGVsc2Uge1xuXHRcdFx0XHRcdCB0aGlzLnNpZ25VcCgpO1xuXHRcdFx0IH1cblx0IH1cblxuXHQgbG9naW4oKSB7XG5cdCB9XG5cblx0IHNpZ25VcCgpIHtcblxuXHQgfVxuXG5cdCB0b2dnbGVEaXNwbGF5KCkge1xuXHRcdFx0IHRoaXMuaXNMb2dnaW5nSW4gPSAhdGhpcy5pc0xvZ2dpbmdJbjtcblx0IH1cbn1cbiJdfQ==