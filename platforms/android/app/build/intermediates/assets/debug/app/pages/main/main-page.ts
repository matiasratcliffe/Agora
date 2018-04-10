import {EventData, Observable} from "data/observable";
import {Page} from "ui/page";

import "../../tsmodules/myfuncs";

class StartPageController extends Observable {

  public pageLoaded(args: EventData) {
    var page = <Page>args.object;
    page.bindingContext = this;
    console.log("Page Loaded!");
  }

  public tappit() {
	  console.log("tapppp");
	  PopUp();
  }

}

var spc = new StartPageController();
export var pageLoaded = args => spc.pageLoaded(args);
export var tappit = spc.tappit;
