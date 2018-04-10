"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var observable_1 = require("data/observable");
var StartPageController = /** @class */ (function (_super) {
    __extends(StartPageController, _super);
    function StartPageController() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    StartPageController.prototype.pageLoaded = function (args) {
        var page = args.object;
        page.bindingContext = this;
        console.log("Page Loaded!");
    };
    return StartPageController;
}(observable_1.Observable));
var spc = new StartPageController();
exports.pageLoaded = function (args) { return spc.pageLoaded(args); };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi1wYWdlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibWFpbi1wYWdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsOENBQXNEO0FBR3REO0lBQWtDLHVDQUFVO0lBQTVDOztJQVFBLENBQUM7SUFOUSx3Q0FBVSxHQUFqQixVQUFrQixJQUFlO1FBQy9CLElBQUksSUFBSSxHQUFTLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDN0IsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUM7UUFDM0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQztJQUM5QixDQUFDO0lBRUgsMEJBQUM7QUFBRCxDQUFDLEFBUkQsQ0FBa0MsdUJBQVUsR0FRM0M7QUFFRCxJQUFJLEdBQUcsR0FBRyxJQUFJLG1CQUFtQixFQUFFLENBQUM7QUFDekIsUUFBQSxVQUFVLEdBQUcsVUFBQSxJQUFJLElBQUksT0FBQSxHQUFHLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxFQUFwQixDQUFvQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtFdmVudERhdGEsIE9ic2VydmFibGV9IGZyb20gXCJkYXRhL29ic2VydmFibGVcIjtcbmltcG9ydCB7UGFnZX0gZnJvbSBcInVpL3BhZ2VcIjtcblxuY2xhc3MgU3RhcnRQYWdlQ29udHJvbGxlciBleHRlbmRzIE9ic2VydmFibGUge1xuXG4gIHB1YmxpYyBwYWdlTG9hZGVkKGFyZ3M6IEV2ZW50RGF0YSkge1xuICAgIHZhciBwYWdlID0gPFBhZ2U+YXJncy5vYmplY3Q7XG4gICAgcGFnZS5iaW5kaW5nQ29udGV4dCA9IHRoaXM7XG4gICAgY29uc29sZS5sb2coXCJQYWdlIExvYWRlZCFcIik7XG4gIH1cblxufVxuXG52YXIgc3BjID0gbmV3IFN0YXJ0UGFnZUNvbnRyb2xsZXIoKTtcbmV4cG9ydCB2YXIgcGFnZUxvYWRlZCA9IGFyZ3MgPT4gc3BjLnBhZ2VMb2FkZWQoYXJncyk7XG4iXX0=