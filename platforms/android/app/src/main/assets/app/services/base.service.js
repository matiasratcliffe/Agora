"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var BaseService = /** @class */ (function () {
    function BaseService(router) {
        this.router = router;
        this.pageStack = [];
    }
    BaseService.prototype.goto = function (location) {
        this.router.navigate([location]);
    };
    BaseService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [router_1.Router])
    ], BaseService);
    return BaseService;
}());
exports.BaseService = BaseService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYmFzZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJDO0FBQzNDLDBDQUF5QztBQUd6QztJQUdDLHFCQUFxQixNQUFjO1FBQWQsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUZuQyxjQUFTLEdBQWtCLEVBQUUsQ0FBQztJQUVRLENBQUM7SUFFdkMsMEJBQUksR0FBSixVQUFLLFFBQVE7UUFDWixJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7SUFDbEMsQ0FBQztJQVBXLFdBQVc7UUFEdkIsaUJBQVUsRUFBRTt5Q0FJaUIsZUFBTTtPQUh2QixXQUFXLENBU3ZCO0lBQUQsa0JBQUM7Q0FBQSxBQVRELElBU0M7QUFUWSxrQ0FBVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQmFzZVNlcnZpY2Uge1xuXHRwYWdlU3RhY2s6IEFycmF5PE9iamVjdD4gPSBbXTtcblxuXHRjb25zdHJ1Y3RvciAocHJpdmF0ZSByb3V0ZXI6IFJvdXRlcikge31cblxuXHRnb3RvKGxvY2F0aW9uKSB7XG5cdFx0dGhpcy5yb3V0ZXIubmF2aWdhdGUoW2xvY2F0aW9uXSk7XG5cdH1cblxufVxuIl19