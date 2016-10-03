import { FlowRouter } from "meteor/kadira:flow-router";
import { BlazeLayout} from "meteor/kadira:blaze-layout";

FlowRouter.route("/", {
	name: "home",
	action(){
		BlazeLayout.render("mainLayout");
	}	
});

FlowRouter.route("/insert-questions", {
	name: "insert-questions",
	action(){
		BlazeLayout.render("mainLayout",{content:"questions"});
	}	
});
