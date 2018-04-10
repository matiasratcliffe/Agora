"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var observable_1 = require("data/observable");
require("../../tsmodules/myfuncs");
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
    StartPageController.prototype.tappit = function () {
        console.log("tapppp");
        PopUp();
    };
    return StartPageController;
}(observable_1.Observable));
var spc = new StartPageController();
exports.pageLoaded = function (args) { return spc.pageLoaded(args); };
exports.tappit = spc.tappit;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi1wYWdlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibWFpbi1wYWdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsOENBQXNEO0FBR3RELG1DQUFpQztBQUVqQztJQUFrQyx1Q0FBVTtJQUE1Qzs7SUFhQSxDQUFDO0lBWFEsd0NBQVUsR0FBakIsVUFBa0IsSUFBZTtRQUMvQixJQUFJLElBQUksR0FBUyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQzdCLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDO1FBQzNCLE9BQU8sQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLENBQUM7SUFDOUIsQ0FBQztJQUVNLG9DQUFNLEdBQWI7UUFDQyxPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3RCLEtBQUssRUFBRSxDQUFDO0lBQ1QsQ0FBQztJQUVILDBCQUFDO0FBQUQsQ0FBQyxBQWJELENBQWtDLHVCQUFVLEdBYTNDO0FBRUQsSUFBSSxHQUFHLEdBQUcsSUFBSSxtQkFBbUIsRUFBRSxDQUFDO0FBQ3pCLFFBQUEsVUFBVSxHQUFHLFVBQUEsSUFBSSxJQUFJLE9BQUEsR0FBRyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsRUFBcEIsQ0FBb0IsQ0FBQztBQUMxQyxRQUFBLE1BQU0sR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtFdmVudERhdGEsIE9ic2VydmFibGV9IGZyb20gXCJkYXRhL29ic2VydmFibGVcIjtcbmltcG9ydCB7UGFnZX0gZnJvbSBcInVpL3BhZ2VcIjtcblxuaW1wb3J0IFwiLi4vLi4vdHNtb2R1bGVzL215ZnVuY3NcIjtcblxuY2xhc3MgU3RhcnRQYWdlQ29udHJvbGxlciBleHRlbmRzIE9ic2VydmFibGUge1xuXG4gIHB1YmxpYyBwYWdlTG9hZGVkKGFyZ3M6IEV2ZW50RGF0YSkge1xuICAgIHZhciBwYWdlID0gPFBhZ2U+YXJncy5vYmplY3Q7XG4gICAgcGFnZS5iaW5kaW5nQ29udGV4dCA9IHRoaXM7XG4gICAgY29uc29sZS5sb2coXCJQYWdlIExvYWRlZCFcIik7XG4gIH1cblxuICBwdWJsaWMgdGFwcGl0KCkge1xuXHQgIGNvbnNvbGUubG9nKFwidGFwcHBwXCIpO1xuXHQgIFBvcFVwKCk7XG4gIH1cblxufVxuXG52YXIgc3BjID0gbmV3IFN0YXJ0UGFnZUNvbnRyb2xsZXIoKTtcbmV4cG9ydCB2YXIgcGFnZUxvYWRlZCA9IGFyZ3MgPT4gc3BjLnBhZ2VMb2FkZWQoYXJncyk7XG5leHBvcnQgdmFyIHRhcHBpdCA9IHNwYy50YXBwaXQ7XG4iXX0=